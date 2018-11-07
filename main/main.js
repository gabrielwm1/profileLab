"use strict"

const main = {
    //this html template will b inserted when the main component is referened
  template: `<section class = "main-container">
             <section class = "image-container"></section>

              <section>
                <img src = "">
                <p>{{ $ctrl.info.name }}</p>
                <p>{{ $ctrl.info.contact }}</p>
                <p>{{ $ctrl.info.bio }}</p>
      
              <button>edit</button>
              </section>

    </section>
  `,

  controller: ["profileService", function(profileService) {
    const vm = this;
    // Creating a property of the controller called info, which is initialized to the object returned from the getData method
    vm.info = profileService.getUserProfile();

  }]

}


//getting the module and creating the component
angular
    .module("App")
    .component("main", main)