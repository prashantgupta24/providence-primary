var module = angular.module("myApp", ["ngRoute"]);

module.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl : "pages/home.html"
    })
    .when("/founders", {
      templateUrl : "pages/founders.html"
    })
});
//module.controller("Mainctrl", test);
//
// function FooterCtrl($scope) {
//     $scope.header = {name: "footer.html", url: "footer.html"};
// }
