export default () =>
'<form name="searchForm" novalidate ng-submit="$ctrl.getNews(query)">' +
	'<div class="form-group">' +
		'<label>Строка запроса</label>' +
		'<input type="text" class="form-control" placeholder="Введите поисковый запрос" ng-model="query">' +
	'</div>' +
	'<button type="submit" class="btn btn-default" ng-disabled="!query">Искать</button>' +
'</form>';