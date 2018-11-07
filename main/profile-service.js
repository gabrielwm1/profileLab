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
    }

}
angular
    .module("App")
    .service("profileService", profileService);

    