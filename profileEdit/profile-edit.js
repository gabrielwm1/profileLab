"use strict"
const profileEdit = {
    
    templateUrl: "profileEdit/profile-edit.html",

    controller: ["profileService", function(profileService){
        const vm = this;
        // vm.passInfo = (person) => {
        
        vm.person = angular.copy(profileService.getUserProfile());

        vm.passData = (updatedPerson) => {
            profileService.setUserProfile(updatedPerson);
            console.log("test");
        };
      
        // };
    }]
}

angular
    .module("App")
    .component("profileEdit", profileEdit);
