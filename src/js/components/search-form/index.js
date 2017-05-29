import tmpl from './tmpl.js'

export default {
	controller(vkNewsService, $scope, $location, $http) {
		this.getNews = function(query) {
			if (!query) return;

			vkNewsService.reset();
			vkNewsService.search(query)
				.then(
					result => {
						$http({
							method: 'POST',
							url: 'http://ft.dev.hismith.ru/stat/create/',
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/x-www-form-urlencoded',
							},
							data: 'query=' + query,
						}).catch(
							error => {
								console.log(error);
							});

						$scope.$apply(() => $location.path('/news'));
					},
					error => console.warn(error.message)
				)

		};
	},
	template: tmpl(),
}
