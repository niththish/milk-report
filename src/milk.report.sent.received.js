angular.module('milkReport')
.controller('sentreceivedController',['$scope','$http',sentreceivedController])
.component('sentreceivedComponent',{
    templateUrl:'receivedAcknowledge.html',
    controller:'sentreceivedController',
})

function sentreceivedController($scope,$http){
    $scope.amount;
    $scope.received=function(){
        var data={
            received:true,
            receivedAmount:$scope.amount
        };
        $http.put("https://milk-report.herokuapp.com/received/"+$scope.id,JSON.stringify(data)).success(function(data){
            $scope.data=data;
            
        })
    }
}
