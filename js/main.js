var app = angular.module("myApp", ["ngRoute"]);

app.controller("mainCtrl", mainFunction);

function mainFunction($scope) {
  $scope.message = "main";
  $scope.allPages = [
    {url: "#/", name: "Home"},
    {url: "#founders", name: "founders"}
  ];

  $scope.idSelectedPage=0;

  $scope.setSelected = function(id) {
    console.log("Received id" + id);
    $scope.idSelectedPage=id;
  }
}

app.controller("foundersCtrl", foundersFunction);

function foundersFunction($scope) {
  $scope.message = "founders";
  $scope.idSelectedPage=1;
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
});

//app.controller("Mainctrl", test);
//
// function FooterCtrl($scope) {
//     $scope.header = {name: "footer.html", url: "footer.html"};
// }
