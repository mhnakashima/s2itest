workerTasker.controller('ModalTaskController', function($scope, $modalInstance, workItem){
			
	if(workItem.currentIndex != undefined){
		$scope.title = "Edit";
		$scope.work = {done: workItem.work.done, name: workItem.work.name, description: workItem.work.description, index: workItem.currentIndex};
	}else{
		$scope.title = "Add";
		$scope.work = {done: false, name: "", description: ""};
	}		

	$scope.submitForm = function () {
		$modalInstance.close($scope.work);
	};

	$scope.cancelForm = function () {
	    $modalInstance.dismiss('cancel');
	};
})