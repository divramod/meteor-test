//console.log("4-run.js");

function onReady() {
    angular.bootstrap(document, ['app.example']);
}

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
} else {
    angular.element(document).ready(onReady);
}

angular.module('app.example').run(function(
    $rootScope,
    $ionicLoading
) {

});
