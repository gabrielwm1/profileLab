"use strict"

angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
          // when the user navigates to the comp-one route(see index.html), load the compOne component in ngView
          .when("/main", {
            template: "<main></main>"
          })
          // when the user navigates to the comp-one route(see index.html), load the compOne component in ngView
          .when("/profile-edit", {
            template: "<profile-edit></profile-edit>"
          });
          
      }])