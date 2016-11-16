"use strict";

app.controller("TodoCtrl", function($scope, ItemFactory){
	$scope.welcome = "hi";
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items = [];

	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems){
		$scope.items = fbItems;
	});
}
getItems();
	$scope.allItems = function(){
        $scope.showListView = true;
	};
	$scope.newItem = function(){
        $scope.showListView = false;
	};

	$scope.addNewItem = function(){
		$scope.newTask.isCompleted = false;
		ItemFactory.postNewItem($scope.newTask).then(function(itemId){
		getItems();
			$scope.newTask = {};
			$scope.showListView = true;
		});
	}
});
