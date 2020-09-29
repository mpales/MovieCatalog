class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

  connectedCallback(){
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
       return this.shadowDOM.querySelector("#searchElement").value;
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
          position: sticky;
          top: 0px;
          z-index: 1;
          background-color: #0f4c75;
          color: white;
        }
        .main-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 1px;
        }
        img {
          width: 50px;
          padding: 5px;
          margin: auto 5px;
        }
        figure {
          display: flex;
          padding: 16px;
          align-items: center;
        }
        figcaption {
          padding: 5px;
        }
        .search-container {
          display: flex;
          margin: 10px 10px;
      }
      .search-box {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          padding: 8px;
          background-color: white;
          width: 300px;
        }
      .search-box > input {
          width: 75%;
          padding: 11px;
          border: 0;
          border-bottom: 1px solid #0f4c75;
          font-weight: bold;
      }
      .search-box > input:focus {
          outline: 0;
          border-bottom: 2px solid #0f4c75;
      }
      .search-box > input:focus::placeholder {
          font-weight: bold;
      }
      .search-box >  input::placeholder {
          color: #24215e;
          font-weight: normal;
      }
      .search-box > button {
          width: 22%;
          cursor: pointer;
          margin-left: 2px;
          padding: 8px;
          background-color: #0f4c75;
          border: 0;
          border-radius: 5px;
          font-size: 14px;
          color: white;
      }
      @media screen and (max-width: 600px){
          figure {
            margin: auto;
            width: 100%;
            justify-content: center;
          }
          .search-container {
              max-width: 600px;
              flex-direction: column;
              position: static; 
              margin: auto;
          }
          .search-box {
            max-width: 90%;
            margin: auto;
          }
          .search-box > input {
              width: 100%;
              margin-bottom: 5px;
          }
          .search-box > button {
              width: 100%;
          }
      }
      </style>    
      <div class="main-container">
        <figure>
          <img src="../src/img/iconflat.svg">
          <figcaption><h2>Movie Catalog</h2></figcaption>
        </figure>
        <div id="search-container" class="search-container">
          <div class="search-box">
            <input placeholder="Search movie" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
          </div>
        </div>
      </div>`;
      //this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
      this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("app-bar", AppBar);
