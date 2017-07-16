(function(){
    angular.module("register",[]);
    
    angular.module("register")
    .config(function(){
        console.log("I am register module config module..")
    })
    .run(function(){
        console.log("I am register module run method..");
    })
})();