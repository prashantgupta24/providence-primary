var app = angular.module("myApp", ["ngRoute"]);

app.controller("mainCtrl", mainFunction);

function mainFunction($scope) {
  $scope.message = "main";
  $scope.allPages = [
    {url: "#about", name: "ABOUT"},
    {url: "#services", name: "SERVICES"},
    {url: "#portfolio", name: "LEADERS"},
    {url: "#contact", name: "CONTACT"}
  ];
} //map to a function

app.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl : "pages/home.html",
      controller  : "mainCtrl"
    })
    .when("/founders", {
      templateUrl : "pages/founders.html",
      controller  : "mainCtrl"
    })
    .when("/a_page", {
      templateUrl : "pages/a_page.html",
      controller  : "mainCtrl"
    })
    .when("/another_page", {
      templateUrl : "pages/another_page.html",
      controller  : "mainCtrl"
    })
    .when("/contact", {
      templateUrl : "pages/contact.html",
      controller  : "mainCtrl"
    })
});
