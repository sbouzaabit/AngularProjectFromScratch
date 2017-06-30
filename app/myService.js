/**
 * Created by sbouzaab on 20/09/2016.
 */

var srv = angular.module('myApp.myService', []);

srv.factory('personFactory',['$http', function($http) {
    return {
        getAllPersons : function() {
            return $http.get("http://localhost:8080/rest/personWS/getAllPersons");
        },
        editPerson : function(person) {
            return $http.post("http://localhost:8080/rest/personWS/updatePerson", person);
        },
        deletePerson : function(id) {
            return $http.get("http://localhost:8080/rest/personWS/deletePerson/"+id);
        },
        findPerson : function(nom) {
            return $http.get("http://localhost:8080/rest/personWS/getPersonByName/"+nom);

        },
        addPerson : function(person) {
            return $http.post("http://localhost:8080/rest/personWS/addPerson", person);
        }
    }

}])







