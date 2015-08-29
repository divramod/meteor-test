angular.module('app.example').controller('ErgebnisseCtrl', function(
    $scope,
    $state,
    $cordovaKeyboard
) {

    // =========== [ test ] ===========
    if (Meteor.isCordova) {
        //$cordovaKeyboard.hideAccessoryBar(true)
        //$cordovaKeyboard.disableScroll(true)
        console.table($cordovaKeyboard);
    }

    // =========== [ create helper ] ===========
    
    // =========== [ $scope.ergebnisCreate() ] ===========
    $scope.ergebnisCreate = function() {
      console.log("$scope.ergebnisCreate");
      
    }; //$scope.ergebnisCreate()


    // =========== [ misc ] ===========
    $scope.title = $state.current.data.title;
    // =========== [ form ] ===========
    $scope.formData = {};
    $scope.formFields = [{
            //the key to be used in the model values {... "username": "johndoe" ... }
            key: 'username',
            type: 'input',
            templateOptions: {
                type: 'text',
                placeholder: 'johndoe'
            }
        }, {
            key: 'password',
            type: 'input',
            templateOptions: {
                type: 'password',
                placeholder: 'Password',
                icon: 'ion-lock-combination',
                iconPlaceholder: true
            }
        }, {
            key: 'myStory',
            type: 'textarea',
            templateOptions: {
                placeholder: 'My story',
                rows: 5
            }
        }, {
            key: 'remember',
            type: 'range',
            templateOptions: {
                //label: 'Password',
                rangeClass: 'calm',
                min: '0',
                max: '100',
                step: '5',
                value: '25',
                minIcon: 'ion-volume-low',
                maxIcon: 'ion-volume-high'
            }
        }

    ];

    $scope.onSubmit = function() {
        console.log('form submitted:', $scope.formData);
    };

});
