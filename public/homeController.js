var app = angular.module("dynamic-app", []);

app.controller('homeCtrl', ['$scope', '$http', function($scope, $http){
  console.log('Home Controller');
  $http.get('/public/fields.json').then(function(res){
    $scope.data = res.data;
  });
}]);
