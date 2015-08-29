//console.log("1-app.js");
//AccountsTemplates.configure({
//negativeValidation: false,
//negativeFeedback: false,
//positiveValidation: false,
//positiveFeedback: false,
//});
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});
T9n.setLanguage('de');
angular.module('app.example', [
    'angular-meteor',
    'ui.router',
    'uiGmapgoogle-maps',
    'ionic',
    'ionic-datepicker',
    'ngCordova.plugins.datePicker',
    'ngCordova.plugins.device',
    'ngCordova.plugins.keyboard',
    'formly',
    'formlyIonic'
]);
