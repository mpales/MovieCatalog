class NowPlaying extends HTMLElement {
  set playings(playings) {
    this._playings = playings;
    this.render();
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2>${message}</h2>`;
  }

  render() {
    this.classList.add('carousel-inner');
    this.innerHTML = "";
    this._playings.forEach((playing, index) => {
    this.innerHTML += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <img class="carousel-image" src="https://image.tmdb.org/t/p/w780/${playing.backdrop_path}" alt="...">
          <figcaption class="caption-now">
            <p>${playing.title}</p> <span>&#9733 ${playing.vote_average.toFixed(1)}</span>
            <span>Now Playing</span><p>Release on: ${playing.release_date}</p>
          </figcaption>
        </div>`;
    });
  }
}

customElements.define("now-playing", NowPlaying);
