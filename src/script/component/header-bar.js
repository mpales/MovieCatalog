import './header-item.js';

class HeaderBar extends HTMLElement {
  set playings(playings) {
    this._playings = playings;
    this.render();
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = "";
    this._playings.forEach(playing => {
        const headerItemElement = document.createElement("header-item");
        headerItemElement.playing = playing;
        this.appendChild(headerItemElement);
    })
  } 
}

customElements.define("header-bar", HeaderBar);
