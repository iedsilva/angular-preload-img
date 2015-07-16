app.directive('imgPreload', function() {
	return {
		restrict: 'A',

		link: function(scope, element) {
			element.on('load', function() {
				element.removeClass('hidden');
				element.parent().find('span').remove();
			});
			scope.$watch('ngSrc', function() {
				element.addClass('hidden');
				element.parent().append('<span class="spinner"><img width="30" style="background:transparent;" src="/img/ring.svg"/></span>');
			});
		}
	};
});