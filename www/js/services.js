angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Requests', function() {
	// Might use a resource here that returns a JSON array

	// Some fake testing data
	var requests = [{
		id: 0,
		name: 'Scruff McGruff'
	}, {
		id: 1,
		name: 'G.I. Joe'
	}, {
		id: 2,
		name: 'Miss Frizzle'
	}, {
		id: 3,
		name: 'Ash Ketchum'
	}];



	return {
		all: function() {
			return requests;
		},
		get: function(friendId) {
			// Simple index lookup
			return requests[requestId];
		}
	}
});
