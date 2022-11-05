var app = angular.module("myApp", ["ngRoute"]);
app
    .value("LINKS", ["style", "design", "food", "relationships", "travel", "about"])
    .value("CLINKS", ["createpost", "deletepost", "getposts", "updatepost"])
    .value("defaultInput", "MyCAPSLock");
app.service('trunc', function () {
    this.truncateText = function (x) {
        console.log(x.substr(0, 50) + "...");
        return x.substr(0, 50) + "...";
    }
});
app
    .controller("myController", function ($scope, LINKS, CLINKS) {
        $scope.links = LINKS;
        $scope.crudlinks = CLINKS;
        $scope.active = 'home';
        $scope.url = "videos/brown-aesthetic.mp4";
        var vid = document.getElementById("video");
        $scope.vplay = function () {
            vid.play();
        }
        $scope.vpause = function () {
            vid.pause();
        }
        $scope.vforward = function () {
            if (video.currentTime + 3 >= 30) {
                video.currentTime = 0;
            }
            else {
                video.currentTime = video.currentTime + 3;
            }
            video.play();
        }
        $scope.vbackward = function () {
            if (video.currentTime - 3 <= 0) {
                video.currentTime = 0;
            }
            else {
                video.currentTime = video.currentTime - 3;
            }
            video.play();
        }
        $scope.vrestart = function () {
            video.currentTime = 0;
            console.log(video.currentTime);
            video.play();
        }
    })
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "homeController"
        })
        .when("/design", {
            templateUrl: "templates/design.html",
            controller: "designController"
        })
        .when("/food", {
            templateUrl: "templates/food.html",
            controller: "foodController"
        })
        .when("/style", {
            templateUrl: "templates/style.html",
            controller: "styleController"
        })
        .when("/relationships", {
            templateUrl: "templates/relationships.html",
            controller: "relationshipsController"

        })
        .when("/travel", {
            templateUrl: "templates/travel.html",
            controller: "travelController"

        })
        .when("/about", {
            templateUrl: "templates/about.html",
            controller: "myController"

        })
        .when("/createpost", {
            templateUrl: "templates/create.html",
        })
        .when("/deletepost", {
            templateUrl: "templates/delete.html",
        })
        .when("/updatepost", {
            templateUrl: "templates/update.html",
        })
        .when("/getposts", {
            templateUrl: "templates/all.html",
        })
});