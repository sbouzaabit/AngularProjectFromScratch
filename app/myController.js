/**
 * Created by sbouzaab on 20/09/2016.
 */
var cntr = angular.module('myApp.myController', ['myApp.myService']);
cntr.controller('myController', ['personFactory', '$scope', function (personFactory, $scope) {
    $scope.enabled = false;

    $scope.getAllPersons = function () {
        personFactory.getAllPersons().success(function (response) {
            $scope.listPersons = response;

        });
    }

    $scope.editPerson = function (per) {
        personFactory.editPerson(per).success(function (response) {
            $scope.per = response;
            $scope.enabled = false;

        });
    }

    $scope.deletePerson = function (id) {
        personFactory.deletePerson(id).success(function (response) {
            $scope.listPersons = [];
            $scope.listPersons = response;
            $scope.enabled = false;

        });
    }

    $scope.findPerson = function (nom) {
        personFactory.findPerson(nom).success(function (response) {
            $scope.listPersons = [];
            $scope.listPersons.push(response);
        });
    }

    $scope.addPerson = function (per) {
        personFactory.addPerson(per).success(function (response) {
            $scope.listPersons = [];
            personFactory.getAllPersons().success(function (response) {
                $scope.listPersons = response;

            });

        });
    }


}]);

