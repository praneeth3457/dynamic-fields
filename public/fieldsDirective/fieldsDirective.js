
var app = angular.module("dynamic-app");
app.directive("fieldsDirective", function() {
    return {
        restrict : 'AE',
        templateUrl : '/public/fieldsDirective/fields.html',
        scope: {
          field : '=field'
        }
    };
});
