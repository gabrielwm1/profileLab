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
    //redirects user to edit page

    self.loadEditSection = () => {
        $location.path("/profile-edit");
    }

}
angular
    .module("App")
    .service("profileService", profileService);

    