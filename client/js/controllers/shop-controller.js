angular.module('App').controller('ShopCtrl', ['$scope', '$rootScope', 'Item', function($scope, $rootScope, Item){
	// Data initialization and methods declaration
	$scope.newItem = {};
	$scope.curItem = {};
	$scope.items = [];
	$scope.clothes = [];
	$scope.accessories = [];
	$scope.rootScope = $rootScope;
	$scope.options = [{
		'state':'clothes',
		'title': 'Vêtements',
		'name': 'Vêtements'
	}, {
		'state':'accessories',
		'title': 'Accessoires',
		'name': 'Accessoires'
	}, {
		'state':'contact',
		'title': 'Besoin d\'une commande sur mesure? Contactez-moi!',
		'name': 'Contact'
	}];

	$scope.updateItem = function(item) {
		console.log("Click : " + item);
		Item.upsert(item, function success(data, header){
			item = data;
		});
	}

	$rootScope.$on('loginSuccessful', function(){
		$scope.logged = true;
	});

	//Executed at instanciation

	if ($rootScope.logged){
		$scope.logged = true;
	}
	
	Item.find(function success(data){
		$scope.items = data;
		angular.forEach($scope.items, function(value, key){
			// if(value.category === 'Vêtements'){
			// 	$scope.clothes.push(value);
			// } else if (value.category === 'Accessories'){
			// 	$scope.accessories.push(value);				
			// }
		});
	});

}]);