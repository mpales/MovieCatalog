class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

  connectedCallback(){
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML =
    `<style>
      * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            background-color: #24215e;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        .container {
          display: flex;
        }
        img {
          width: 50px;
          padding: 5px;
          margin: auto 5px;
        }
        h2 {
            padding: 16px;
            align-items: center;
        }
      </style>
      <div class="container">
      <img src="../src/img/iconflat.svg">
      <h2>Movie Catalog</h2>
      </div>`;
  }
}

customElements.define("app-bar", AppBar);
