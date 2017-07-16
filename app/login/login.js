(function(){
    angular.module("login",[]);
    
    angular.module("login")
    .config(function(){
        console.log("I am login module config module..")
    })
    .run(function(){
        console.log("I am login module run method..");
    })
})();