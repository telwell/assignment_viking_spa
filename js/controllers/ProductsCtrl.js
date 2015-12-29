app.controller('ProductsCtrl', ['$scope', '$window', 'product', 'cart', function($scope, $window, product, cart) {
  
  $scope.products = product.buildProducts(24);

  $scope.categories = product.getCategories();

  $scope.filterCategory = '';

  $scope.cart = cart.getCart();

  $scope.addToCart = function(id){
  	cart.addItem(id);
  }

  $scope.showFilterCategory = true;

}]);