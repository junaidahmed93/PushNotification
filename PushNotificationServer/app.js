var app = angular.module('main', []);

app.controller('first', function ($scope, $http) {
    console.log('hi');
    $scope.done = function () {

        // var jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhYzAyZDAyMy1hYmJmLTRiOGEtYmEyOC1jYTg4MWUyZGUyZTAifQ.cS6w1iAr1LwArq8EDvjxLDWeuhDZjyXSDM-gaqrUUzA';
        var jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZTk3ZmFlMy0zYWRkLTQ1N2QtOGZlOS1mNGQxYzRkMTY3MjMifQ.Yj__hKOi6KkAyQB7uha4q52_JKHfLeUud_QM6YR8_ho';
        var tokens = ['9d8f8d0044b12a9b1959481ea368b5dcd9951bd0e49a2af6', '4406a33d-4362-48c7-befc-556fba5c087d', 'fNnTXKGlhcE:APA91bHaHe8N44jjqPbcoyFpD5XIRBFzbesNZvpoLUlAsz7nZJ0ubWbK0BH5iu9CR4yxalxC-M8FWzU-fgLr4BTA11errx2DHJDUS9NQGXaQvQiKJgRixMTU3xtCMaJhPITAOo73vNR5'];
        var profile = 'testing';
        var req = {
            method: 'POST',
            url: 'https://api.ionic.io/push/notifications',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt
            },
            data: {
                "tokens": tokens,
                "profile": profile,
                "notification": {
                    "title": "HI",
                    "message": "Hello world!",
                    "android": {
                        "title": "Haris-Bhai",
                        "message": "Haris-Hello Android!"
                    },
                    "ios": {
                        "title": "IOS",
                        "message": "Hello iOS!"
                    }
                }
            }
        };

        // Make the API call
        $http(req).success(function (resp) {
            // Handle success
            console.log("Ionic Push: Push success", resp);
        }).error(function (error) {
            // Handle error 
            console.log("Ionic Push: Push error", error);
        });
    }
})