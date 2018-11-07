"use strict"

const main = {
    //this html template will b inserted when the main component is referened
  templateUrl: "main/main.html",

  controller: ["profileService", function(profileService) {
    const vm = this;
    // Creating a property of the controller called info, which is initialized to the object returned from the getData method
    vm.info = profileService.getUserProfile();
    // vm.info = mainService.setUserProfile();

  }]

}


//getting the module and creating the component
angular
    .module("App")
    .component("main", main)