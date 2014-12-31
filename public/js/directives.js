var module = angular.module('deltahacks.directives', []);

app.directive('formField', function($compile) {
	return {
		replace: true,
		// template: '<div></div>',
		link: function(scope, iElem, iAttrs) {				
				var input = '<input class="form-control"' +
				'name=' + iAttrs['bindTo'] +
				' placeholder=' + iAttrs['formTitle'] +
				' ng-model=' + iAttrs['bindTo'] +
				' required>';
				var inputDiv = '<div class="col-sm-4">' + input + '</div>'
				var label = '<label class="col-sm-2 control-label">' + iAttrs['formTitle'] + '</label>';
				var formGroup =  '<div class="form-group">' + label + inputDiv + '</div>';
			iElem.replaceWith($compile(formGroup)(scope));
		}
	};
})