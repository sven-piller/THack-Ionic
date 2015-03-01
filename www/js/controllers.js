angular.module('starter.controllers', [])

.controller('Q1Ctrl', ['$scope', '$http', '$rootScope', '$stateParams',
	function($scope, $http, $rootScope, $stateParams) {
		$scope.responseData = null;
		$rootScope.request = {};
		$scope.typeList = [{
			text: "JUST ME",
			img: "img/beach.jpg",
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
			img: "img/camping.jpg",
			checked: false,
			id: 3,
			color: '#7B8EC6'
		}, {
			text: "COUPLES",
			img: "img/city.jpg",
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
			img: "img/countryside.jpg",
			checked: false,
			id: 2,
			color: '#D4382B'
		}, {
			text: "COUNTRY",
			img: "img/camping.jpg",
			checked: false,
			id: 3,
			color: '#7B8EC6'
		}, {
			text: "SKI",
			img: "img/city.jpg",
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
			text: "1-3",
			img: "img/city.jpg",
			checked: false,
			id: 1,
			color: '#006B88'
		}, {
			text: "4-6",
			img: "img/city.jpg",
			checked: false,
			id: 2,
			color: '#D4382B'
		}, {
			text: "7-9",
			img: "img/beach.jpg",
			checked: false,
			id: 3,
			color: '#7B8EC6'
		}, {
			text: "10-12",
			img: "img/beach.jpg",
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
			img: "img/beach.jpg",
			checked: false,
			id: 1,
			color: '#006B88'
		}, {
			text: "500",
			img: "img/beach.jpg",
			checked: false,
			id: 2,
			color: '#D4382B'
		}, {
			text: "750",
			img: "img/beach.jpg",
			checked: false,
			id: 3,
			color: '#7B8EC6'
		}, {
			text: "1000",
			img: "img/beach.jpg",
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

	var reQuestData = {
			'type': "family",
			'destination': "beach",
			'month': '8',
			'budget': '2'

		}
		// https://nameless-bastion-4712.herokuapp.com/flights.json?Origin=MUC&Destination=LHR&DepartureFrom=2015-06-18&LengthOfStay=4
		// &DepartureTo=2015-07-18&persons=2&type=FastSearch
		/*
		  sendRequest = function() {
		    var request = $http({
		      method: 'POST',
		      url: 'http://travless.com/hackton',
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
		        //console.log("headers -> " + headers);
		        //console.log("config -> " + JSON.stringify(config));
		      }
		    );
		  };*/

	setTimeout(function sendRequest() {
		$scope.responseData = [{
			'id': '332222',
			'destination': 'MUC',
			'color': '#006B88',
			'price': '678,55'

		}, {
			'id': '221',
			'destination': 'LAX',
			'color': '#006B88',
			'price': '123,55'
		}];
		$ionicLoading.hide();
		console.log(JSON.stringify($scope.responseData));
	}, 1000);

})

.controller('DetailCtrl', ['$scope', '$http', '$rootScope', '$stateParams',
	function($scope, $http, $rootScope, $stateParams) {
		console.log($stateParams);
		$scope.detail = {
			'id': $stateParams.id,
			'flight': 'LH400',
			'destination': 'MUC',
			'color': '#006B88',
			'price': '678,55'
		};
	}
]);
