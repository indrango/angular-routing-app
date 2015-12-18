var app = angular.module('routerApp', ['routerRoutes'])

app.controller('mainController',function($scope) {
  $scope.bigMessage = "All the single ladies";
});

app.controller('homeController', function($scope) {
  $scope.message = "Home page!";
});

app.controller('aboutController', function($scope) {
  $scope.message = "About page!";
});

app.controller('contactController', function($scope) {
  $scope.message = "This is me!";
});
