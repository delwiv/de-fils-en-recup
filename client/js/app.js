var app = angular.module('App', [
	'ngRoute',
	'ui.router',
	'ngResource',
	'lbServices',
	'duScroll',
	'App.services'
	]);

angular.module('App.services', ['lbServices', 'angularFileUpload']);

app.controller('IndexCtrl', ['$scope', function($scope){
	$scope.options = [{
		'state':'home',
		'title': 'Accueil',
		'name': 'Accueil'
	}, {
		'state':'findme',
		'title': 'Je suis souvent sur des festivals ou autres manifestations, cliquez pour plus d\'infos',
		'name': 'Où me trouver?'
	}, {
		'state':'contact',
		'title': 'Besoin de plus d\'infos? d\'une commande sur mesure? Contactez-moi!',
		'name': 'Contact'
	}];
}]);
