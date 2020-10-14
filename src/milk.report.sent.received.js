angular.module('milkReport')
.controller('sentreceivedController',['$scope','$http','$stateParams',sentreceivedController])
.component('sentreceivedComponent',{
    templateUrl:'receivedAcknowledge.html',
    controller:'sentreceivedController',
})

function sentreceivedController($scope,$http,$stateParams){
    $scope.id=$stateParams.id;
    $scope.amount;
    $scope.received=function(){
        var data={
            received:true,
            receivedAmount:$scope.amount
        };
        $http.put("https://milk-report.herokuapp.com/sent/"+$scope.id,JSON.stringify(data)).success(function(data){
            $scope.data=data;
            $scope.details="Inserted";
            $scope.amount="";
            
        })
    }
}
