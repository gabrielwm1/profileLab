"use strict"
function profileService($location) {
    const self = this;
    self.info = {
        name: "A",
        contact: "B",
        bio: "C"
    };

    self.getUserProfile = () =>{
        return self.info;
    }
    self.setUserProfile = (person) => {
        self.info = person;
        //$location.path("/main/main")
        console.log(self.info);
    }

}
angular
    .module("App")
    .service("profileService", profileService);