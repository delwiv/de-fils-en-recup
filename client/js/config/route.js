angular.module('App').config([ 
	'$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider  
		.state('index', {
			url: '/',
			views: { 
				'@': {
					templateUrl:'partials/layout.html',
					controller: 'IndexCtrl'
				},
				'navbar@index': { templateUrl: 'partials/navbar.html'},
				'header@index': { templateUrl: 'partials/header.html'},
				'sidebar@index': { templateUrl: 'partials/sidebar.html'},
				'body@index': { templateUrl: 'partials/body.html'},
				'footer@index': { templateUrl: 'partials/footer.html'},
				'osmWidget@index': { templateUrl: 'partials/osm-widget.html'}
			}
		})
		.state('shop', { 
			url:'/shop',
			views:{
				'@': {
					templateUrl: 'partials/layout.html',
					controller: 'ShopCtrl'
				},
				'navbar@shop': { templateUrl: 'partials/navbar.html'},
				'header@shop': { templateUrl: 'partials/header.html'},
				'sidebar@shop': { templateUrl: 'partials/sidebar.html'},
				'body@shop': { templateUrl: 'partials/shop/body.html'},
				'footer@shop': { templateUrl: 'partials/footer.html'},
				'osmWidget@shop': { templateUrl: 'partials/osm-widget.html'},
				'item@shop': {templateUrl:'partials/shop/item.html'}
			}
		});
		// .state('')
	}]);