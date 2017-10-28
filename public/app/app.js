/**
 * Created by hfs on 10/28/2017.
 */
var userCrud = angular.module('userCrud', []);

userCrud.controller('ContactCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Hello from app controller");

    var refresh = function() {
        $http.get('/contactlist').success(function(response) {
            console.log("got the requested data");
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    refresh();

    $scope.addContact = function() {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(response) {
            console.log(response);
            refresh();

        });
    };

    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/contactlist/' + id).success(function(response) {
            refresh();
        });
    };

}]);﻿