angular.module('milkReport')
.controller('sentreceivedController',['$scope',sentreceivedController])
.component('sentreceivedComponent',{
    templateUrl:'receivedAcknowledge.html',
    controller:'sentreceivedController',
})

function sentreceivedController($scope){
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
