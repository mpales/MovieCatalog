class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

  connectedCallback() {
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
    .search-container {
        display: flex;
        justify-content: flex-end;
        position: sticky;
        top: 10px;
    }
    .search-box {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        padding: 12px;
        background-color: white;
        width: 400px;
      }
    .search-box > input {
        width: 70%;
        padding: 11px;
        border: 0;
        border-bottom: 1px solid #24215e;
        font-weight: bold;
    }
    .search-box > input:focus {
        outline: 0;
        border-bottom: 2px solid #24215e;
    }
    .search-box > input:focus::placeholder {
        font-weight: bold;
    }
    .search-box >  input::placeholder {
        color: #24215e;
        font-weight: normal;
    }
    .search-box > button {
        width: 25%;
        cursor: pointer;
        margin-left: auto;
        padding: 11px;
        background-color: #DD0510;
        color: white;
        border: 0;
        font-size: 14px;
    }
    @media screen and (max-width: 600px){
        .search-container {
            max-width: 600px;
            flex-direction: column;
            position: static; 
        }
        .search-box {
          max-width: 85%;
          margin: auto;
        }
        .search-box > input {
            width: 100%;
            margin-bottom: 12px;
        }
        .search-box > button {
            width: 100%;
        }
    }
    </style>

    <div id="search-container" class="search-container">
        <div class="search-box">
        <input placeholder="Search movie" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
        </div>
    </div>`;

    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
