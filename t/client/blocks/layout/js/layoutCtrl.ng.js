angular.module('app.example').controller('LayoutCtrl', function(
    $rootScope,
    $scope,
    $state,
    $ionicLoading,
    $window
) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $scope.title = $state.current.data.title;
        $scope.show = $state.current.data.show;
        $scope.hideRightMenu = $state.current.data.hideRightMenu;
        $scope.hideLeftMenu = $state.current.data.hideLeftMenu;
    });

    $scope.title = $state.current.data.title;
    $scope.show = $state.current.data.show;
    $scope.hideRightMenu = $state.current.data.hideRightMenu;
    $scope.hideLeftMenu = $state.current.data.hideLeftMenu;
    $scope.user = Meteor.user();

    // =========== [ $scope.logout() ] ===========
    $scope.logout = function() {
        console.log("$scope.logout");
        Meteor.logout(function(err) {
            // callback
            Session.set("ses", false);
            $state.go("app.home");
        });
    }; //$scope.logout()

    // =========== [ $scope.loggedIn() ] ===========
    $scope.loggedIn = function() {
        //console.log("$scope.loggedIn");
        //console.log(Meteor);
        //console.log(Meteor.userId());
        return Meteor.userId();
    }; //$scope.loggedIn()

    Accounts.onLogin(function() {
        //console.log("logged in");
        //$state.go("app.home");
    });

    // =========== [ $scope.goBack() ] ===========
    $scope.goBack = function() {
        $window.history.back();
    }; //$scope.goBack()

    // =========== [ $scope.goHome() ] ===========
    $scope.goHome = function() {
        $state.go("app.home");
    }; //$scope.goHome()

    // =========== [ $scope.goHome() ] ===========
    $scope.goSettings = function() {
        $state.go("app.home");
    }; //$scope.goHome()

});
