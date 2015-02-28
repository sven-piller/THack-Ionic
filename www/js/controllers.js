angular.module('starter.controllers', [])

.controller('Q1Ctrl', ['$scope', '$http', function($scope, $http) {
	$scope.typeList = [{
		text: "Couple",
		img: "img/beach.jpg",
		checked: false,
		id: 1
	}, {
		text: "Family",
		img: "img/family.jpg",
		checked: false,
		id: 2
	}, {
		text: "Single",
		img: "img/camping.jpg",
		checked: false,
		id: 3
	}, {
		text: "Friends",
		img: "img/city.jpg",
		checked: false,
		id: 4
	}];
}])

.controller('Q2Ctrl', ['$scope', '$http', function($scope, $http) {
	$scope.destinationList = [{
		text: "Beach",
		img: "img/beach.jpg",
		checked: false,
		id: 1
	}, {
		text: "Countryside",
		img: "img/countryside.jpg",
		checked: false,
		id: 2
	}, {
		text: "Camping",
		img: "img/camping.jpg",
		checked: false,
		id: 3
	}, {
		text: "City",
		img: "img/city.jpg",
		checked: false,
		id: 4
	}];
}])

.controller('Q3Ctrl', ['$scope', '$http', function($scope, $http) {

}])

.controller('Q4Ctrl', ['$scope', '$http', function($scope, $http) {

	$scope.sendRequest = function() {
		var request = $http({
			method: 'POST',
			url: '',
			headers: {
				'Content-Type': 'application/x-www-form-urlenidd'
			},
			transformRequest: function(obj) {
				var str = [];
				for (var p in obj)
					str.push(enidURIComponent(p) + "=" +
						enidURIComponent(obj[p]));
				return str.join("&");
			},
			data: {
				name: $scope.name,
				flight: $scope.flight,
				name_pickuper: $scope.name_pickuper,
				email_pickuper: $scope.email_pickuper,
				message: $scope.message,
				uid: $scope.unique_request
			}
		});
		request.success(
			function(data, status, headers, config) {

				//$scope.cfdump = data;
				console.log("success");
				//console.log($scope.cfdump);
				console.log(JSON.stringify(data));
				$scope.response_data = data;
				$scope.showCard = true;
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
	};
}])

/*.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})
*/
.controller('RequestCtrl', function($scope) {
	/*$scope.tasks = [
	  { title: 'Collect coins' },
	  { title: 'Eat mushrooms' },
	  { title: 'Get high enough to grab the flag' },
	  { title: 'Find the Princess' }
	];*/
});
