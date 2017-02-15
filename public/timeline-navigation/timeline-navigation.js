
var app = angular.module("dynamic-app");
app.directive("timelineNavigation", ['$http', function($http) {
    return {
        restrict : 'AE',
        templateUrl : '/public/timeline-navigation/navigation.html',
        scope: {},
        link: function(scope, element, attrs) {
          $http.get('/public/fields.json').then(function(res){
            scope.data = res.data;
            console.log(scope.data);
          });
        }
    };
}]);
