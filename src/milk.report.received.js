angular.module('milkReport')
.controller('receivedController',['$scope','$http',receivedController])
.component('receivedComponent',{
    templateUrl:'receivedList.html',
    controller:'receivedController',
})

function receivedController($scope,$http){

    $http.get('https://milk-report.herokuapp.com/').success(function(data){
        $scope.search;
        $scope.receivedcustomers=[];
        $scope.total=0;
        $scope.data=data;
        
        $scope.data.filter((value)=>{
            if(value.received==true){
                $scope.receivedcustomers.push(value);
                
                console.log($scope.receivedcustomers);
            }
        })
        
    
        
    })
    
}
