angular.module('topicController', [])

	// inject the Topic service factory into our controller
	.controller('mainController', ['$scope','$http','Topics', function($scope, $http, Topics) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.alreadyPresent = false;

		// GET =====================================================================
		// when landing on the page, get all topics and show them
		// use the service to get all the topics
		Topics.get()
			.success(function(data) {
				$scope.topics = data;
				$scope.loading = false;
			});

		$scope.checkPresence = function(){
			var alreadyPresent = false;
			$scope.topics.forEach(function(topic) {
			     if($scope.formData.text == topic.text){ alreadyPresent = true;}
			});
			$scope.alreadyPresent = alreadyPresent;
		};

		$scope.stopTopic = function(id) {
			$scope.loading = true;
			Topics.update(id,false)
				// if successful creation, call our get function to get all the new topics
				.success(function(data) {
					$scope.loading = false;
					$scope.topics = data; // assign our new list of topics
				});
		};
		$scope.resumeTopic = function(id) {
			$scope.loading = true;
			Topics.update(id,true)
				// if successful creation, call our get function to get all the new topics
				.success(function(data) {
					$scope.loading = false;
					$scope.topics = data; // assign our new list of topics
				});
		};

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTopic = function() {
			var alreadyPresent = false;
			$scope.topics.forEach(function(topic) {
			     if($scope.formData.text == topic.text){ alreadyPresent = true;}
			});
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if (($scope.formData.text != undefined) && !alreadyPresent) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Topics.create($scope.formData)

					// if successful creation, call our get function to get all the new topics
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.topics = data; // assign our new list of topics
					});
			}
		};

		// DELETE ==================================================================
		// delete a topic after checking it
		$scope.deleteTopic = function(id) {
			$scope.loading = true;

			Topics.delete(id)
				// if successful creation, call our get function to get all the new topics
				.success(function(data) {
					$scope.loading = false;
					$scope.topics = data; // assign our new list of topics
				});
		};
	}]);