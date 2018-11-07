"use strict"
const profileEdit = {
    
    templateUrl: "profileEdit/profile-edit.html",

    controller: ["profileService", function(profileService){
        const vm = this;
        // vm.passInfo = (person) => {
        // vm.info = person;
        vm.passData = (person) => {
            profileService.setUserProfile(person);
            console.log("test");
        };
      
        // };
    }]
}

angular
    .module("App")
    .component("profileEdit", profileEdit);
