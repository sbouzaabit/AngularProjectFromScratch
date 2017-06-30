/**
 * Created by sbouzaab on 18/09/2016.
 */
var app = angular.module('myApp',['myApp.myController','myApp.myService']);


/*var app = angular.module('myApp',[]);
 app.controller('myController',function ($scope,$http) {
$scope.getAllPersons=function () {
    $http.get("http://mydomain:8080/rest/personWS/getPersons")
        .success(function (data) {
            $scope.listPersons=data;
            console.log("person data " +$scope.person);
        });
};

});*/
