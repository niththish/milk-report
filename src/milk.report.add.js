angular.module('milkReport')
.controller('addController',['$scope','$http',addController])
.component('addComponent',{
    templateUrl:'addCustomer.html',
    controller:'addController',
})

function addController($scope,$http){
    $scope.customernumber;
    $scope.customername;

    $scope.addCustomer=function(){
        var data={
            name:$scope.customername,
            phone:$scope.customernumber
        }

        $http.post('https://milk-report.herokuapp.com/add',JSON.stringify(data)).success(function(data){
            $scope.data=data;
        })
    }
}