angular.module('milkReport')
.controller('senteditController',['$scope','$stateParams','$http',senteditController])
.component('senteditComponent',{
    templateUrl:'sentEdit.html',
    controller:'senteditController',
})

function senteditController($scope,$stateParams,$http){
    $scope.id=$stateParams.id;
    $scope.phone;
    $scope.amount;

    $scope.sendcustomers=[];
    

    $http.get('https://milk-report.herokuapp.com/').success(function(data){
        data.filter((value)=>{
            if(value._id===$scope.id){
                $scope.sendcustomers.push(value);
                $scope.phone="91"+$scope.sendcustomers[0].phone;
            }
        })

    })

    $scope.sendCustomer=function(){
        var data={
            sent:true,
            sentAmount:$scope.amount
        };
        $http.put("https://milk-report.herokuapp.com/send/"+$scope.id,JSON.stringify(data)).success(function(data){
            $scope.data=data;
            
        })
    
    }
}
