angular.module('App')
.controller('LoginCtrl', ['$scope', '$rootScope', 'UserDFER',
	function($scope, $rootScope, UserDFER) {
		$scope.logged = false;
		$scope.creds = {};
		$scope.user = {};

		UserDFER.getCurrent(function success(user){
			$scope.user = user;
			$scope.logged = true;
			$rootScope.$broadcast('loginSuccessful');
		});

		$scope.login = function(){
			UserDFER.login($scope.creds, 
				function success(token){
					$scope.token = token;
					UserDFER.findById({"id": token.userId}, function success(data){
						$scope.user = data;
						$scope.logged = true;
						$rootScope.$broadcast('loginSuccessful');
						$rootScope.logged = true;
					});
				});
		};

		$scope.logout = function() {
			var logoutResult = UserDFER.logout(
				{"access_token": $scope.token.id},
				function(err){
					$scope.logged = false;
					$scope.token = {};
					$scope.user = {};
					$rootScope.$broadcast('logoutSuccessful');
					$rootScope.logged = false;
				}
				);
		};
	}]);