var app = angular.module("myApp", ["ngRoute"]);

app.controller("mainCtrl", mainFunction);

function mainFunction($scope) {
  $scope.message = "main";
  $scope.allPages = [
    {url: "#/", name: "Home"},
    {url: "#founders", name: "Founders"},
    {url: "#a_page", name: "A Page"},
    {url: "#another_page", name: "Another Page"},
    {url: "#contact", name: "Contact Us"}
  ];

  $scope.idSelectedPage=0;

  $scope.setSelected = function(id) {
    $scope.idSelectedPage=id;
  }
}

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
