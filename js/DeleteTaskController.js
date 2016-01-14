workerTasker.controller('DeleteTaskController', function($scope, $modalInstance, workItem){
			
	$scope.yes = function () {
		$modalInstance.close(workItem);
	};

	$scope.no = function () {
	    $modalInstance.dismiss('cancel');
	};
})