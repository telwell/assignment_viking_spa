app.service('cart', function(){
	
	var cart = {};

	// TODO: Remove this function, it's just
	// for debugging purposes for now.
	var getCart = function(){
		return cart;
	}

	// Return all items in the cart.
	var listAll = function(){
		return cart;
	}

	var addItem = function(id, quantity){
		// Add a default value to quantity
		quantity = (quantity == undefined ? 1 : quantity);

		// If the item isn't in the cart
		if(Object.keys(cart).indexOf(id.toString()) < 0){
			cart[id] = quantity;
		} else {
			cart[id] = cart[id] + quantity
		}
	}

	var itemsCount = function(){
		var total = 0;
		for(var v in cart){
			total += parseInt(v);
		}
		return total;
	};

	// QUESTION: I can't get this to update when
	// the actual count changes. Can you help figure
	// this out please? 
	var countTotal = itemsCount();

  return {
  	getCart: getCart, 
  	addItem: addItem, 
  	listAll: listAll,
  	countTotal: countTotal
  }

});