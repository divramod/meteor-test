angular.module('app.example').controller('HomeCtrl', function(
    $scope
) {

    $scope.username = Meteor.user();
    console.log(Meteor.user());
});
