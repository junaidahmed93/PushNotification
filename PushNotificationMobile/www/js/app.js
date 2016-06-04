// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      var ref = new Firebase("https://pushnotificationgcm.firebaseio.com/");
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);

        var push = new Ionic.Push({
          "debug": true,
          "onNotification": function (notification) {
            var payload = notification.payload;
            alert(notification.text);
          },
          "onRegister": function (data) {
            console.log(data.token);
          }
        });

        push.register(function (token) {
          console.log("Device token:", token.token);
          document.getElementById("demo").innerHTML = token.token;
          alert(token.token);
          if(token.token != null)
          {
            ref.push({
            token: token.token
           
          });
          }
          
          push.saveToken(token);  // persist the token in the Ionic Platform
        });
        $rootScope.$on('notification', function (a) {
          console.log(a);
        })
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
