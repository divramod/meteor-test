angular.module('app.example').controller('SpielortCreateCtrl', function(
    $scope,
    uiGmapIsReady,
    $meteor,
    $state
) {

    $scope.addSpielort = function(newSpielort) {
        $meteor.call('addSpielort', newSpielort);
    };

    $scope.deleteSpielort= function(spielort) {
        $meteor.call('deleteSpielort', spielort._id);
    };

    $scope.onSubmit = function() {
        $scope.addSpielort($scope.formData);
        $state.go("app.spielorteHome");
    };

    // =========== [ CRUD HELPERS ] ===========

    // =========== [ form ] ===========
    $scope.formData = {};
    $scope.formFields = [{
        key: 'name',
        type: 'floating-input',
        templateOptions: {
            type: 'text',
            label: 'Name des Spielorts',
            placeholder: 'Name des Spielorts',
            focus: true
        }
    }, {
        key: 'strasse',
        type: 'floating-input',
        templateOptions: {
            type: 'text',
            label: 'Straße/Hausnummer',
            placeholder: 'Straße/Hausnummer'
        }
    }, {
        key: 'ort',
        type: 'floating-input',
        templateOptions: {
            type: 'text',
            label: 'Ort',
            placeholder: 'Ort'
        }
    }, {
        key: 'plz',
        type: 'floating-input',
        templateOptions: {
            type: 'text',
            label: 'Postleitzahl',
            placeholder: 'Postleitzahl'
        }
    }];


    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8,
        events: {},
        options: {
            scrollwheel: false
        },
        control: {}
    };

    //uiGmapIsReady.promise().then(function(map_instances) {
    //console.log("map ready");
    //var map1 = $scope.map.control.getGMap(); // get map object through $scope.map.control getGMap() function
    //var map2 = map_instances[0].map; // get map object through array object returned by uiGmapIsReady promise
    //alert('map is now ready');
    //if (map1 === map2) {
    //alert('map1 object is the same as map2 object');
    //}
    //});
});
