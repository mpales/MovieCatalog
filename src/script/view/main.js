import '../component/movie-list.js';
import '../component/search-bar.js';
import GetMovie from "../data/data-source.js";

const main = () => {
    $('.carousel').carousel();
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const headerBarElement = document.querySelector("header-bar");
    //can use either Promise or Async/Await
    const onButtonSearchClicked = async () => {
        try {
          const result = await GetMovie.searchMovie(searchElement.value);
            renderSearchResult(result);
        } catch (message) {
            fallbackSearchResult(message)
        }
    }

    const renderSearchResult = results => {
        movieListElement.movies = results;
    }

    const fallbackSearchResult = message => {
        movieListElement.renderError(message);
    }
    searchElement.clickEvent = onButtonSearchClicked;

    const headerBarCarousel = async () => {
        try {
          const result = await GetMovie.nowPlaying();
            renderNowPlaying(result);
        } catch (message) {
            fallbackNowPlaying(message)
        }
    }

    const renderNowPlaying = results => {
        headerBarElement.playings = results;
    }

    const fallbackNowPlaying = message => {
        headerBarElement.renderError(message);
    }
    headerBarCarousel();
}

export default main;

