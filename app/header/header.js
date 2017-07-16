(function(){
    angular.module("header",[]);
    
    angular.module("header")
    .config(function(){
        console.log("I am header module config module..")
    })
    .run(function(){
        console.log("I am header module run method..");
    })
})();