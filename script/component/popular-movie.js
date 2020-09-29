class PopularMovie extends HTMLElement {
  set populars(populars) {
    this._populars = populars;
    this.render();
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2>${message}</h2>`;
  }

  render() {
    this.classList.add('carousel-inner');
    this.innerHTML = "";
    this._populars.forEach((popular, index) => {
    this.innerHTML += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <img class="carousel-img" src="https://image.tmdb.org/t/p/w300/${popular.poster_path}" alt="...">
          <figcaption>
            <p>${popular.title} <span>&#9733 ${popular.vote_average.toFixed(1)}</span></p>
          </figcaption>
        </div>`;
    });
  }
}

customElements.define("popular-movie", PopularMovie);
