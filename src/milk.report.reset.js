angular.module('milkReport')
.controller('resetController',['$scope','$http',resetController])
.component('resetComponent',{
    templateUrl:'reset.html',
    controller:'resetController',
})

function resetController($scope,$http){

    $scope.reset=function(){
        $http.put('https://milk-report.herokuapp.com/reset').success(function(data){
        $scope.details="Reseted to default";
        
    })
    }
    
     
}
