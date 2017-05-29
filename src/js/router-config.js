export default ($routeProvider, $location) => {
	$routeProvider
		.when("/", {
			template: "<search-form></search-form>"
		})
		.when("/news/", {
			template : '<search-form></search-form><news-list></news-list>',
			controller: ['$location', 'vkNewsService', function($location, vkNewsService) {
				vkNewsService.getCurrentState().query || $location.path('/');
			}]
		})
		.when("/news/:id", {
			template : "<single-news newsid='{{$ctrl.id}}'></single-news>",
			controller: ['$location', 'vkNewsService', '$routeParams', function($location, vkNewsService, $routeParams) {
				if(vkNewsService.getNews().length > 0 && $routeParams.id >= 0) {
					this.id = $routeParams.id;
				} else {
					$location.path('/');
				}
			}],
			controllerAs: "$ctrl"
		})
		.otherwise({redirectTo:'/'});
}
