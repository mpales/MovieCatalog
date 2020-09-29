import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";
import "jquery";
import "./styles/style.css";
import "./script/component/app-bar.js";
import "./script/component/now-playing.js";
import "./script/component/popular-movie.js";
import "./script/component/upcoming-movie.js";
import "./script/component/top-rated.js";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);
