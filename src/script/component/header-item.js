import "bootstrap/js/dist/carousel";

class HeaderItem extends HTMLElement {
  set playing(playing) {
      this._playing = playing;
      this.render();
  }

  render() {
    this.innerHTML =
    `<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="2000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://image.tmdb.org/t/p/w300/${this._playing.poster_path}" alt="...">
          <div class="carousel-caption vertical-center d-none d-md-block">
            <h3>${this._playing.title}</h3>
          </div>
        </div>
      </div>
    </div>`;
  }
}
customElements.define("header-item", HeaderItem);
