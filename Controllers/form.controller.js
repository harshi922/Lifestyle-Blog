app.controller("formController", function($scope, $http){
    $http.get("test1.php").then(function(response){
        $scope.myData = response.data.records;
    });
})