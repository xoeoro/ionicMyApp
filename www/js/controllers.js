angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.share = function() {
    console.debug('share');
    console.log('typeof SocialVk');
    console.log(typeof SocialVk);
    if(typeof SocialVk != 'undefined') {
      if(typeof SocialVk == 'function') {
        SocialVk().share('http://ukr.net', 'comment', 'http://img.youtube.com/vi/qQiEvw3JkA4/0.jpg', function(success){
          console.log('success');
          console.info(JSON.stringify(success));
        }, function(error) {
          console.log('error');
          console.error(JSON.stringify(error));
        });
      } else {
        console.log('typeof SocialVk.share');
        console.log(typeof SocialVk.share);
        SocialVk.share('http://ukr.net', 'comment', 'http://img.youtube.com/vi/qQiEvw3JkA4/0.jpg', function(success){
          console.log('success');
          console.info(JSON.stringify(success));
        }, function(error) {
          console.log('error');
          console.error(JSON.stringify(error));
        });
      }
      
    }
    console.log('after call share');
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
