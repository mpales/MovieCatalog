class UpcomingMovie extends HTMLElement {
  set upcomings(upcomings) {
    this._upcomings = upcomings;
    this.render();
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2>${message}</h2>`;
  }

  render() {
    this.classList.add('carousel-inner');
    this.innerHTML = "";
    this._upcomings.forEach((upcoming, index) => {
    this.innerHTML += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <img class="carousel-img" src="https://image.tmdb.org/t/p/w300/${upcoming.poster_path}" alt="...">
          <figcaption>
            <p>${upcoming.title} <span>&#9733 ${upcoming.vote_average.toFixed(1)}</span></p>
          </figcaption>
        </div>`;
    });
  }
}

customElements.define("upcoming-movie", UpcomingMovie);
