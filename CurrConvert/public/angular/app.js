var myApp = angular.module('myApp', []);

myApp.controller('homeController',['$http',function($http) {

	var main = this;
	this.requested = 'false';
	this.back = function(){
		this.requested = 'false';
	}

	this.find = function(){

    if(main.value==undefined){
      return alert("Please enter an INR value")
    }

	  main.requested = "loading";

    var mydata = {
      value: main.value
    }
   
      $http({
        method: 'POST',
        data: mydata,
        url: './convert'
      }).then(function successCallback(response) {
          if(response.data.status==200){
            main.dollar = Math.round(response.data.converted*100)/100;
            main.requested = 'true';
          
          }else{
            alert(response.data.msg)
          }
          

        }, function errorCallback(response) {
          
          alert("some error occurred. Check the console.");
          console.log(response);

        });


	}

}]);