angular.module('starter.controllers', [])

.controller('Q1Ctrl', ['$scope', '$http', '$rootScope', '$stateParams',
	function($scope, $http, $rootScope, $stateParams) {
		$scope.responseData = null;
		$rootScope.request = {};
		$scope.typeList = [{
			text: "JUST ME",
			img: "img/single.png",
			checked: false,
			id: 1,
			color: '#006B88'
		}, {
			text: "FAMILY",
			img: "img/family.jpg",
			checked: false,
			id: 2,
			color: '#D4382B'
		}, {
			text: "FRIENDS",
			img: "img/friends.png",
			checked: false,
			id: 3,
			color: '#7B8EC6'
		}, {
			text: "COUPLES",
			img: "img/couple.png",
			checked: false,
			id: 4,
			color: '#A39685'
		}];
	}
])

.controller('Q2Ctrl', ['$scope', '$http', '$rootScope', '$stateParams',
	function($scope, $http, $rootScope, $stateParams) {
		console.log($stateParams);
		$rootScope.request.type = $stateParams.type;
		$scope.destinationList = [{
			text: "BEACH",
			img: "img/beach.jpg",
			checked: false,
			id: 1,
			color: '#006B88'
		}, {
			text: "URBAN",
			img: "img/city.jpg",
			checked: false,
			id: 2,
			color: '#D4382B'
		}, {
			text: "COUNTRY",
			img: "img/countryside.jpg",
			checked: false,
			id: 3,
			color: '#7B8EC6'
		}, {
			text: "SKI",
			img: "img/ski.png",
			checked: false,
			id: 4,
			color: '#A39685'
		}];
	}
])

.controller('Q3Ctrl', ['$scope', '$http', '$rootScope', '$stateParams',
	function($scope, $http, $rootScope, $stateParams) {
		console.log($stateParams);
		$rootScope.request.destination = $stateParams.destination;
		$scope.monthList = [{
			text: "Winter",
			img: "img/winter.png",
			checked: false,
			id: 1,
			color: '#006B88'
		}, {
			text: "Spring",
			img: "img/spring.png",
			checked: false,
			id: 2,
			color: '#D4382B'
		}, {
			text: "Summer",
			img: "img/summer.png",
			checked: false,
			id: 3,
			color: '#7B8EC6'
		}, {
			text: "Autumn",
			img: "img/autumn.png",
			checked: false,
			id: 4,
			color: '#A39685'
		}];
	}
])

.controller('Q4Ctrl', ['$scope', '$http', '$rootScope', '$stateParams',
	function($scope, $http, $rootScope, $stateParams) {
		console.log($stateParams);
		$rootScope.request.date = $stateParams.date;
		$scope.budgetList = [{
			text: "300",
			img: "img/b1.png",
			checked: false,
			id: 1,
			color: '#006B88'
		}, {
			text: "500",
			img: "img/b2.png",
			checked: false,
			id: 2,
			color: '#D4382B'
		}, {
			text: "750",
			img: "img/b3.png",
			checked: false,
			id: 3,
			color: '#7B8EC6'
		}, {
			text: "1000",
			img: "img/b4.png",
			checked: false,
			id: 4,
			color: '#A39685'
		}];
	}
])

.controller('ResultCtrl', function($scope, $http, $rootScope, $stateParams,
	$ionicLoading) {
	console.log($stateParams);
	$ionicLoading.show({
			template: 'loading'
		})
		//$rootScope.request.money = $stateParams.money;
	$scope.responseData = null;

	//console.log(JSON.stringify($rootScope.request));
	//var requestData = $rootScope.request;
	var requestData = {
		"Origin": "MUC",
		"Destination": "LHR",
		"DepartureFrom": "2015-06-18",
		"LengthOfStay": "4",
		"DepartureTo": "2015-07-18",
		"persons": "2",
		"type": "FastSearch"
	};
	/*
	var requestData = {
		'type': "family",
		'destination': "beach",
		'month': '8',
		'budget': '2'

	};*/
	// https://nameless-bastion-4712.herokuapp.com/flights.json?Origin=MUC&Destination=LHR&DepartureFrom=2015-06-18&LengthOfStay=4
	// &DepartureTo=2015-07-18&persons=2&type=FastSearch

	// TODO FIXME: CORS-Issues, therefor an mockup of the answer result

	/*	sendRequest = function() {
			var request = $http({
				method: 'POST',
				url: 'http://travless.com/hackton/index.php',
				headers: {
					'Content-Type': 'application/json'
				},
				data: requestData
			});
			request.success(
				function(data, status, headers, config) {
					//$scope.cfdump = data;
					console.log("success");
					//console.log($scope.cfdump);
					console.log(JSON.stringify(data));
					$scope.responseData = data;

					$ionicLoading.hide();
				}
			);
			request.error(
				function(data, status, headers, config) {
					console.log("error");
					//console.log($scope.cfdump);
					console.log("data -> " + JSON.stringify(data));
					console.log("status -> " + status);
					// console.log("headers -> " + headers);
					//console.log("config -> " + JSON.stringify(config));
				}
			);
		};
		sendRequest();*/

	setTimeout(function sendRequest() {
		$scope.responseData = [{
			'id': '332222',
			'destination': 'BUD',
			'destination_name': 'Budapest',
			'color': '#006B88',
			'price': '678.55',
			'hotel': 'Hilton',
			'class': '5',
			'date': '2015-07-12'
		}, {
			'id': '221',
			'destination': 'DBX',
			'destination_name': 'Dubai',
			'color': '#D4382B',
			'price': '799.99',
			'hotel': 'Four Seasons',
			'class': '5',
			'date': '2015-07-06'
		}, {
			'id': '123',
			'destination': 'HAM',
			'destination_name': 'Hamburg',
			'color': '#7B8EC6',
			'price': '564.55',
			'hotel': 'Zum Goldenen Hirsch',
			'class': '5',
			'date': '2015-07-18'
		}, {
			'id': '124',
			'destination': 'JFK',
			'destination_name': 'New York',
			'color': '#A39685',
			'price': '723.55',
			'hotel': 'Hilton',
			'class': '5',
			'date': '2015-07-23'
		}];
		$ionicLoading.hide();
		console.log(JSON.stringify($scope.responseData));
	}, 1000);

})

.controller('DetailCtrl', ['$scope', '$http', '$rootScope', '$stateParams',
	function($scope, $http, $rootScope, $stateParams) {
		console.log($stateParams);
		$scope.detail = {
			'destination': 'DBX',
			'destination_name': 'Dubai',
			'price': ' € 799.99',
			'hotel': 'Four Seasons',
			'class': '5 Stars',
			'date': '2015-07-06'
		};
	}
]);
