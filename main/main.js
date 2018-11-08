"use strict"

const main = {
    //this html template will b inserted when the main component is referened
  template: `<section class = "main-container">
             <section class = "image-container"></section>

              <section>
                <section class="image-container">
                  <img src = "grant.png">
                </section>
                <section class="display-info">
                  <p class="name">{{ $ctrl.info.name }}</p>
                  <p class="contact">{{ $ctrl.info.contact }}</p>
                  <p class="bio">{{ $ctrl.info.bio }}</p>
                  <button class="edit-button" ng-click= "$ctrl.loadEditSection()">Edit</button>
                </section>
             
              </section>

    </section>
  `,

  controller: ["profileService", function(profileService) {
    const vm = this;
    // Creating a property of the controller called info, which is initialized to the object returned from the getData method
    vm.info = profileService.getUserProfile();

    vm.loadEditSection = () => {
      profileService.loadEditSection();
    }
  }]
    

}


//getting the module and creating the component
angular
    .module("App")
    .component("main", main)