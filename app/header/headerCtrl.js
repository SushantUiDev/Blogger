(function(){
    function headerCtrlFn(){
        var vm=this;
        vm.brandName="Dreamer";
        vm.navbar=["login","register"];
        vm.loginTemplate="app/login/login.tpl.html";
        vm.registerTemplate="app/register/register.tpl.html";
        vm.loadView=function(para){
            console.log(para);
            if(para == "login"){
                vm.loadTemplate=vm.loginTemplate;
            }
            if(para == "register"){
                vm.loadTemplate=vm.registerTemplate;
            }
        }
    }
    angular.module("header")
    .controller("headerCtrl",[headerCtrlFn])
})();