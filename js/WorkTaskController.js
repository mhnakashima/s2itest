workerTasker.controller('WorkTaskerCtrl', function($scope, $modal){

	$scope.works = [
		{done: true, name: "Language", description: "Write a post"},
		{done: false, name: "Learning", description: "React"}
	];

	$scope.deletePost = function(event, stuff, index){
    	
		var deleteModalInstance = $modal.open({
            templateUrl: 'templates/delete.html',
            controller: 'DeleteTaskController',
            resolve:{
            	workItem: function(){
            		return {currentIndex: index};
            	}
            }

    	});

    	deleteModalInstance.result.then(function(currentIndex){
    		$scope.works.splice(currentIndex, 1);
    	})
    }

	$scope.open = function (index) {

      	var taskModalInstance = $modal.open({
            templateUrl: 'templates/add.html',
            controller: 'ModalTaskController',
            resolve:{
            	workItem: function(){
            		return {work: $scope.works[index], currentIndex: index};
            	}
            }

    	});

    	taskModalInstance.result.then(function(workTask){
    		
    		if(workTask.index != undefined){
    			$scope.works[workTask.index] = workTask;
    		}else{
    			$scope.works.push({done: false, name: workTask.name, description: workTask.description})
    		}
    	})

    }
});	