  const apiKey = "2b3bde309bb8bf699140384c83dc4d08";
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
  const nowUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
  const popUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const upUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
  const topUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
  

  class GetMovie {
    static async searchMovie(keyword) {
      const response = await fetch(`${searchUrl}${keyword}`);
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
    static async popularMovie() {
      const response = await fetch(`${popUrl}`);
      const responseJson = await response.json();
      if (responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject("Nothing to Display");
      }
    }
    static async upcomingMovie() {
      const response = await fetch(`${upUrl}`);
      const responseJson = await response.json();
      if (responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject("Nothing to Display");
      }
    }
    static async topRated() {
      const response = await fetch(`${topUrl}`);
      const responseJson = await response.json();
      if (responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject("Nothing to Display");
      }
    }
  }
  
  export default GetMovie;