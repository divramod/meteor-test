angular.module('app.example').controller('SpielorteCtrl', function(
    $scope,
    $meteor,
    $state
) {

    $scope.$meteorSubscribe('Spielorte');
    $scope.Spielorte = $meteor.collection(function() {
        return Spielorte.find({});
    });
    // =========== [ $scope.updateSpielort() ] ===========
    $scope.updateSpielort = function(spielort) {
        console.log("$scope.updateSpielort", spielort);
        $state.go("app.spielortUpdate", {
            id: spielort._id
        });
    }; //$scope.updateSpielort()

    //console.log("SpielorteCtrl", $scope.Spielorte);
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8,
        events: {},
        options: {
            scrollwheel: false
        }
    };


});
