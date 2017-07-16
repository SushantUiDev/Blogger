(function(){
    angular.module("blogger",["header","login","register"]);
    
    angular.module("blogger")
    .config(function(){
        console.log("I am blogger module config module..")
    })
    .run(function(){
        console.log("I am blogger module run method..");
    })
})();