import "../component/movie-list.js";
import "../component/app-bar.js";
import GetMovie from "../data/data-source.js";
import $ from "jquery";

const main = () => {
    $('.carousel').carousel();
    const searchElement = document.querySelector("app-bar");
    const movieListElement = document.querySelector("movie-list");
    const nowPlayingElement = document.querySelector("now-playing");
    const popularElement = document.querySelector("popular-movie");
    const upcomingElement = document.querySelector("upcoming-movie");
    const topratedElement = document.querySelector("top-rated");

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

    const nowplayingMovie = async () => {
        try {
          const result = await GetMovie.nowPlaying();
            renderNowPlaying(result);
        } catch (message) {
            fallbackNowPlaying(message)
        }
    }
    const renderNowPlaying = results => {
        nowPlayingElement.playings = results;
    }
    const fallbackNowPlaying = message => {
        nowPlayingElement.renderError(message);
    }
    nowplayingMovie();

    const popularMovie = async () => {
        try {
          const result = await GetMovie.popularMovie();
            renderPopularMovie(result);
        } catch (message) {
            fallbackPopularMovie(message)
        }
    }
    const renderPopularMovie = results => {
        popularElement.populars = results;
    }
    const fallbackPopularMovie = message => {
        popularElement.renderError(message);
    }
    popularMovie();

    const upcomingMovie = async () => {
        try {
          const result = await GetMovie.upcomingMovie();
            renderUpcoming(result);
        } catch (message) {
            fallbackUpcoming(message)
        }
    }
    const renderUpcoming = results => {
        upcomingElement.upcomings = results;
    }
    const fallbackUpcoming = message => {
        upcomingElement.renderError(message);
    }
    upcomingMovie();

    const topRated = async () => {
        try {
          const result = await GetMovie.topRated();
            renderTopRated(result);
        } catch (message) {
            fallbackTopRated(message)
        }
    }
    const renderTopRated = results => {
        topratedElement.tops = results;
    }
    const fallbackTopRated = message => {
        topratedElement.renderError(message);
    }
    topRated();

}

export default main;

