import tmpl from './tmpl.js'

export default {
	bindings: {
		newsid: '@'
	},

	controller($sce, $http, vkNewsService, Lightbox) {
		let currentNews = vkNewsService.getNews()[this.newsid];
		if(!currentNews) return false;

		let date = new Date(currentNews.date * 1000);
		this.date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

		this.text = $sce.trustAsHtml(currentNews.text || '');
		this.likes = currentNews.likes.count || 0;

		this.attachments = [];
		if(currentNews.attachments) {
			currentNews.attachments.forEach(attachment => {
				if (attachment.type !== "photo") return;

				let photo = attachment.photo;
				let url = photo.photo_2560 || photo.photo_1280 || photo.photo_807 || photo.photo_604 || photo.photo_130 || photo.photo_75;
				this.attachments.push({ url: url, openModal: () => Lightbox.openModal([{url}], 0)});
			});
		}

		$http.jsonp(`https://api.vk.com/method/users.get?user_id=${Math.abs(currentNews.from_id)}&callback=JSON_CALLBACK`)
			.then(
				result => {
					if (!result.data.response) return;
					this.author = result.data.response[0].last_name + " " + result.data.response[0].first_name;
				},
				error => console.warn(error.message)
			);
	},

	template: tmpl()
}
