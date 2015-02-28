// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.q1', {
    url: '/q1',
    views: {
      'tab-q1': {
        templateUrl: 'templates/tab-q1.html',
        controller: 'Q1Ctrl'
      }
    }
  })

  .state('tab.q2', {
    url: '/q2/:type',
    views: {
      'tab-q2': {
        templateUrl: 'templates/tab-q2.html',
        controller: 'Q2Ctrl'
      }
    }
  })

  .state('tab.q3', {
    url: '/q3/:destination',
    views: {
      'tab-q3': {
        templateUrl: 'templates/tab-q3.html',
        controller: 'Q3Ctrl'
      }
    }
  })

  .state('tab.q4', {
    url: '/q4/:date',
    views: {
      'tab-q4': {
        templateUrl: 'templates/tab-q4.html',
        controller: 'Q4Ctrl'
      }
    }
  })

  /*	.state('tab.friends', {
				url: '/friends',
				views: {
					'tab-friends': {
						templateUrl: 'templates/tab-friends.html',
						controller: 'FriendsCtrl'
					}
				}
			})
			.state('tab.result-detail', {
				url: '/friend/:friendId',
				views: {
					'tab-friends': {
						templateUrl: 'templates/friend-detail.html',
						controller: 'FriendDetailCtrl'
					}
				}
			})
	*/
  .state('tab.results', {
    url: '/results/:money',
    views: {
      'tab-results': {
        templateUrl: 'templates/tab-results.html',
        controller: 'ResultCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/q1');

});
