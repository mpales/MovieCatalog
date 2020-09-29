class TopRated extends HTMLElement {
  set tops(tops) {
    this._tops = tops;
    this.render();
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2>${message}</h2>`;
  }

  render() {
    this.classList.add('carousel-inner');
    this.innerHTML = "";
    this._tops.forEach((top, index) => {
    this.innerHTML += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <img class="carousel-img" src="https://image.tmdb.org/t/p/w300/${top.poster_path}" alt="...">
          <figcaption>
            <p>${top.title} <span>&#9733 ${top.vote_average.toFixed(1)}</span></p>
          </figcaption>
        </div>`;
    });
  }
}

customElements.define("top-rated", TopRated);
