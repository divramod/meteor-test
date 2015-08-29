angular.module('app.example').controller('SpielortUpdateCtrl', function(
    $scope,
    uiGmapIsReady,
    $meteor,
    $state,
    $ionicLoading,
    $timeout
) {
    $scope.plural = "Spielorte";
    $scope.singular = "Spielort";
    $scope.singularLower = "spielort";

    $ionicLoading.show({
        template: 'Daten werden geladen ...'
    });

    $scope.spielort = $meteor.call('getSpielort', $state.params.id).then(function(data) {
            $timeout(function() {
                $scope.formData = {};
                $scope.originalData = angular.copy(data);
                $scope.formData = data;
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
                $ionicLoading.hide();
            }, 1);
        },
        function(err) {
            console.log(err);
        });

    $scope.deleteSpielort = function(spielort) {
        $meteor.call('deleteSpielort', spielort._id);
    };

    // =========== [ $scope.reset() ] ===========
    $scope.reset = function() {
        $scope.formData = angular.copy($scope.originalData);
        $scope.update();
    }; //$scope.reset()

    // =========== [ $scope.delete() ] ===========
    $scope.delete = function() {
        $meteor.call('deleteSpielort', $scope.formData._id).then(function(data) {
            console.log(data);
            $state.go("app.spielorteHome");
        }, function(err) {
            console.log(err);
        });
    }; //$scope.delete()


    $scope.update = function() {
        $meteor.call('updateSpielort', $scope.formData).then(function(data) {
            console.log(data);
        }, function(err) {
            console.log(err);
        });
    };

    // =========== [ $scope.list() ] ===========
    $scope.list = function() {
        $state.go("app." + getEntity() + "Home");
    }; //$scope.list()

    // =========== [ $scope.create() ] ===========
    $scope.create = function() {
        $state.go("app." + $scope.singularLower + "Create");
    }; //$scope.create()

    var getEntity = function() {
        var url = $state.current.url.substring(1, $state.current.url.lenght);
        var entity = url.substring(0, url.indexOf("/"));
        return entity;
    };

});
