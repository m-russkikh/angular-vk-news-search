import angular from 'angular';
import 'angular-route';
import 'angular-ui-bootstrap';
import "angular-ui-carousel";
import "angular-bootstrap-lightbox";

import searchForm from './components/search-form/';
import newsList from './components/news-list/';
import singleNews from './components/single-news/';
import routerConfig from './router-config';
import vkNewsService from './services/vkNews';

import "angular-ui-carousel/dist/ui-carousel.min.css";
import "angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.min.css";
import '../css/style.css';

const app = angular.module("app", ["ngRoute", "ui.carousel", "bootstrapLightbox"])
.config(['$routeProvider', routerConfig])
.component('searchForm', searchForm)
.component('newsList', newsList)
.component('singleNews', singleNews)
.factory('vkNewsService', ['$http', vkNewsService])
