app.controller('CartCtrl', ['$scope', '$window', '$stateParams', 'product', 'cart', function($scope, $window, $stateParams, product, cart) {
  
	$scope.cart = cart.listAll();

	$scope.updateQuantityIds = [];

	$scope.showUpdateQuantity = function(id){
		return ($scope.updateQuantityIds.indexOf(id) >= 0 ? true : false);
	}

	$scope.count = cart.countTotal;

	$scope.hideUpdateQuantity = function(id){
		var i = $scope.updateQuantityIds.indexOf(id);
		$scope.updateQuantityIds.splice(i, 1);
	}

	$scope.getProductById = function(id){
		return product.getProduct(id);
	}

}]);