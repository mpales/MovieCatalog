  const apiKey = "2b3bde309bb8bf699140384c83dc4d08";
  const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
  const nowUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
  
  class GetMovie {
    static async searchMovie(keyword) {
      const response = await fetch(`${baseUrl}${keyword}`);
      const responseJson = await response.json();
      if (responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    }
    static async nowPlaying() {
      const response = await fetch(`${nowUrl}`);
      const responseJson = await response.json();
      if (responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject("Nothing to Display");
      }
    }

  }
  
  export default GetMovie;