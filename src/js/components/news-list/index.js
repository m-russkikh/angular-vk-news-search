import tmpl from './tmpl.js'

export default {
	controller(vkNewsService, $scope) {
		let f = () => {
			this.news = vkNewsService.getNews();
			this.state = vkNewsService.getCurrentState();
		}

		this.$onInit = f;

		this.prev = () => {
			vkNewsService.prev()
				.then(() => $scope.$apply(f));
		};

		this.next = () => {
			vkNewsService.next()
				.then(() => $scope.$apply(f));
		};
	},

	template: tmpl(),
}
