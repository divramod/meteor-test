angular.module('app.example').controller('ErgebnisCreateCtrl', function(
    $scope,
    $meteorCollection,
    $meteor
) {

    //$scope.Ergebnisse = $meteorCollection(Ergebnisse);

    // =========== [ form ] ===========
    $scope.formData = {};
    $scope.spielorteDb = $meteor.collection(Spielorte);
    //console.log($scope.spielorteDb);

    var spielorte = [];
    angular.forEach($scope.spielorteDb, function(spielortDb) {
        //console.log("in");
        var spielort = {};
        spielort.name = spielortDb.name;
        spielort.value = spielortDb._id;
        spielorte.push(spielort);
    });
    $scope.formFields = [{
        "key": "marvel1",
        "type": "select",
        "templateOptions": {
            "label": "Normal Select",
            "options": spielorte
        }
    }];

    $scope.onSubmit = function() {
        console.log('form submitted:', $scope.formData);
    };

});
