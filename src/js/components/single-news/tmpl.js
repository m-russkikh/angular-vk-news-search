export default () =>
'	<div class="single-news">' +
'		<div><b>Дата:</b> {{$ctrl.date}}</div>' +
'		<div><b>Автор:</b> {{$ctrl.author}}</div>' +
'		<div><b>Кол-во лайков:</b> {{$ctrl.likes}}</div>' +
'		<p ng-bind-html="$ctrl.text"></p>' +
'		<ui-carousel ng-if="$ctrl.attachments.length"' +
'				slides="$ctrl.attachments" dots="true">' +
'			<carousel-item>' +
'				<div class="image"><img ng-click="item.openModal();" ng-src="{{ item.url }}"></div>' +
'			</carousel-item>' +
'		</ui-carousel>'
'	</div>';