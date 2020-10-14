angular.module('milkReport')
.config(['$urlRouterProvider','$stateProvider',config])

function config($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
        url:'/',
        template:'<main-component></main-component>'
    })

     //Route to reset everything
     .state('reset',{
        url:'/reset',
        template:'<reset-Component></reset-Component>'
    })

    //Route for adding new customer
    .state('add',{
        url:'/addCustomer',
        template:'<add-Component></add-Component>'
    })

    //Route for message to send list
    .state('send',{
        url:'/send',
        template:'<send-Component></send-Component>'
    })

    //Route for sending message to particular customer
    .state('sends',{
        url:'/send/:id',
        template:'<sendparticular-Component></sendparticular-Component>'
    })

    //Route for message sent customer list
    .state('sent',{
        url:'/sent',
        template:'<sent-Component></sent-Component>'
    })

    //Route to edit the details of sent message details
    .state('sentEdit',{
        url:'/sentMessageEdit/:id',
        template:'<sentedit-Component></sentedit-Component>'
    })

    //Route for acknowledging before sending it to received list
    .state('sentReceived',{
        url:'/receivedAcknowledge/:id',
        template:'<sentreceived-Component></sentreceived-Component>'
    })

    //Route for Received list 
    .state('received',{
        url:'/received',
        template:'<received-Component></received-Component>'
    })
    
    

}