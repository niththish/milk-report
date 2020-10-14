angular.module('milkReport')
.controller('mainController',['$scope','$http',mainController])
.component('mainComponent',{
    templateUrl:'main.html',
    controller:'mainController',
})

function mainController($scope,$http){

    $http.get('https://milk-report.herokuapp.com/').success(function(data){
        $scope.search;
        $scope.customers=data;
        
    })
     
}