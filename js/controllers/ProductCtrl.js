app.controller('ProductCtrl', ['$scope', '$window', '$stateParams', 'product', 'cart', function($scope, $window, $stateParams, product, cart) {
  
	$scope.product = product.getProduct($stateParams.id);

	$scope.showFilterCategory = false;

}]);