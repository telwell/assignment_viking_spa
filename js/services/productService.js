app.service('product', function(){
	
	// Setup blank categories array, where the 
	// index is the Category ID
	var categories = [];

	// Set empty product array
	var products = [];

	var buildCategories = function(){
		// Only build 5 categories for now
		var count = 0;

		while(count < 5){
			var c = faker.commerce.department();
			if(categories.indexOf(c) < 0){
				categories.push(c);
				count++;
			}
		}
	}

	var getCategories = function(){
		if(categories.length == 0){
			buildCategories();
		}
		return categories;
	}

	var getProductName = function(){
		return faker.commerce.productName();
	}

	var getProductPrice = function(){
		return faker.commerce.price();	
	}

	var getProduct = function(id){
		return products[id];
	}

	var buildProducts = function(num){
		// First we'll want to setup all of our categories, unless
		// they've already been setup.
		getCategories();

		for(var i=0;i<num;i++){
			var product = {};
			product.name = getProductName();
			product.price = getProductPrice();

			// Select a random category from our array of 5 categories.
			// Will be able to build getCategoryId later for filtering.
			product.category = categories[Math.floor(Math.random() * categories.length)];

			// QUESTION: Interesting, it appears as though all of the 
			// images are the same, what's up with that?
			product.image = 'http://lorempixel.com/400/200/technics/';

			product.description = faker.lorem.paragraphs(5, '\n');
			products.push(product);
  	}

  	// Return all of our products
  	return products;
	}

  return {
  	buildProducts: buildProducts, 
  	getCategories: getCategories,
  	getProduct: getProduct
  }

});