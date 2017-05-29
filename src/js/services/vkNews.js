export default ($http) => {
	const ACCESS_TOKEN = "70bc19eb70bc19eb70bc19eb1770e0571d770bc70bc19eb299584d4ffc5a6ba0bc9f1e6";
	const NUMBER_OF_NEWS_PER_PAGE = 15;
	let searchQuery, nextFrom, totalCount;
	let curentNews = [], totalNews = [];
	let page = 0;

	function search(query) {
		if (!query) {
			Promise.reject("vkNews.search: query is empty");
			return;
		}

		return new Promise((resolve, reject) => {
			$http.jsonp(`https://api.vk.com/method/newsfeed.search?` +
					`q=${query}&count=${NUMBER_OF_NEWS_PER_PAGE}${nextFrom ? '&start_from=' + nextFrom : ''}` +
					`&access_token=${ACCESS_TOKEN}&&v=5.64&callback=JSON_CALLBACK`)
				.then(
					result =>{
						let data = result.data;

						if(data.response) {
							({items: curentNews, next_from: nextFrom, total_count: totalCount} = data.response);
							totalNews = totalNews.concat(curentNews);
							searchQuery = query;

							resolve(curentNews);
						} else if (data.error) {
							reject(data.error.error_msg);
						}
					});
		});
	};

	function prev() {
		if (page > 0) page--;

		curentNews = totalNews.slice(page * NUMBER_OF_NEWS_PER_PAGE, (page + 1) * NUMBER_OF_NEWS_PER_PAGE);
		return Promise.resolve(curentNews);
	};

	function next() {
		if (totalNews.length - (page + 1) * NUMBER_OF_NEWS_PER_PAGE >= NUMBER_OF_NEWS_PER_PAGE) {
			page++;
			curentNews = totalNews.slice(page * NUMBER_OF_NEWS_PER_PAGE, (page + 1) * NUMBER_OF_NEWS_PER_PAGE);
			return Promise.resolve(curentNews);
		}

		return search(searchQuery)
			.then(
				response => {
					page++;
					return response;
				},
				error => console.warn(error)
			);
	};

	function getNews() {
		return curentNews;
	};

	function getCurrentState() {
		return {
			page,
			totalCount,
			query: searchQuery,
			count: NUMBER_OF_NEWS_PER_PAGE
		};
	};

	function reset() {
		curentNews = [];
		totalNews = [];
		page = 0;
		nextFrom = '';
		searchQuery = "";
	};

	return {
		getNews,
		search,
		prev,
		next,
		getCurrentState,
		reset
	};
}
