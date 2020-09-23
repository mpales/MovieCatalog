class MovieItem extends HTMLElement {

   set movie(movie) {
       this._movie = movie;
       this.render();
   }

   render() {
     this.innerHTML =
       `<img class="movie-poster" src="https://image.tmdb.org/t/p/w200/${this._movie.poster_path}" alt="Movie Poster Here...">
       <div class="movie-info">
          <h5>${this._movie.title}</h5>
          <p>${this._movie.overview}</p>
       </div>`;
   }
}

customElements.define("movie-item", MovieItem);
