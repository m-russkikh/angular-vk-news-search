export default () =>
'<div class="news-list">' +
'	<h2 ng-hide="$ctrl.news.length">Ваш запрос не дал результатов</h2>' +
'	<div ng-show="$ctrl.news.length">' +
'		<ul><li ng-repeat="item in $ctrl.news">' +
'			<a href="#/news/{{$index}}">{{(($ctrl.state.page * $ctrl.state.count) + ($index + 1)) + ". " + (item.text.length > 50 ? item.text.substr(0,50) + "..." : item.text)}}</a>' +
'		</li></ul>' +
'		<div class="pagination">' +
'			<button class="btn btn-default" ng-click="$ctrl.prev()" ng-disabled="$ctrl.state.page<=0">Назад</button>' +
'			<div class="counter">{{$ctrl.state.page + 1}}</div>' +
'			<button class="btn btn-default" ng-click="$ctrl.next()" ng-disabled="($ctrl.state.page+1)*$ctrl.state.count>=$ctrl.state.totalCount">Вперёд</button>' +
'		</div>' +
'	</div>' +
'</div>';