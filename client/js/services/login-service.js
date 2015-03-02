angular.module('App.services')
.factory('LoginService', [ 
    'UserDFER', 
    '$rootScope', 
    function(UserDFER, $rootScope){
        var loginService = {};
        loginService.isLogged = false;
        loginService.user = {};
        loginService.token = {};

        UserDFER.getCurrent(function success(user){
            loginService.user = user;
            loginService.isLogged = true;
            $rootScope.$broadcast('loginSuccessful');
        });

        loginService.login = function(credentials, callback) {
            var loginResult =  UserDFER.login(credentials,
                function success(token){
                    loginService.token = token;
                    UserDFER.findById({"id": token.userId}, function success(data){
                        loginService.user = data;
                        loginService.isLogged = true;
                        $rootScope.$broadcast('loginSuccessful');
                        $rootScope.logged = true;
                        callback();
                    });
                })};

            loginService.logout = function(callback) {
                var logoutResult = UserDFER.logout(
                    {"access_token": loginService.token.id},
                    function(err){
                        loginService.isLogged = false;
                        loginService.token = {};
                        loginService.user = {};
                        callback();
                        $rootScope.$broadcast('logoutSuccessful');
                        $rootScope.logged = false;
                    }
                    );
            };
            return loginService;
        }
        ]);
