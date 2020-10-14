angular.module('milkReport')
.controller('sendController',['$scope','$http',sendController])
.component('sendComponent',{
    templateUrl:'sendList.html',
    controller:'sendController',
})

function sendController($scope,$http){
    
    $http.get('https://milk-report.herokuapp.com/').success(function(data){
        $scope.search;
        $scope.sendcustomers=[];
        $scope.data=data;
    
        $scope.data.filter((value)=>{
            if(value.sent!=true){
                $scope.sendcustomers.push(value);
            }
        })

    })

}