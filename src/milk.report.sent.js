angular.module('milkReport')
.controller('sentController',['$scope','$http',sentController])
.component('sentComponent',{
    templateUrl:'sentList.html',
    controller:'sentController',
})

function sentController($scope,$http){

    $http.get('https://milk-report.herokuapp.com/').success(function(data){
        $scope.search;
        $scope.sentcustomers=[];
        $scope.data=data;
        
        $scope.data.filter((value)=>{
            if(value.received!=true && value.sent==true){
                $scope.sentcustomers.push(value);
            }
        })
    
        
    })


}