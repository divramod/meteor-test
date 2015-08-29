angular.module('app.example').config(
    function(
        $urlRouterProvider,
        $stateProvider,
        $locationProvider
    ) {

        $locationProvider.html5Mode(true);


        $stateProvider.state('projects', {
            url: '/projects',
            templateUrl: 'client/templates/projects/html/layout.ng.html',
            controller: 'TodoCtrl'
        });
        $stateProvider.state('app', {
            abstract: true,
            templateUrl: 'client/blocks/layout/html/layout.ng.html'
        });

        // =========== [ Home ] ===========
        $stateProvider.state('app.home', {
            url: '/home',
            templateUrl: 'client/templates/home/html/home.ng.html',
            controller: 'LayoutCtrl',
            data: {
                show: false,
                title: "Kegelapp Home",
                hideLeftMenu: false
            }
        });

        // =========== [ Ergebnisse ] ===========

        $stateProvider.state('app.ergebnisseHome', {
            url: '/ergebnisse/home',
            templateUrl: 'client/templates/ergebnisse/html/ergebnisse-home.ng.html',
            controller: 'ErgebnisseCtrl',
            data: {
                title: "Ergebnisse Übersicht",
                hideLeftMenu: false
            }
        });
        $stateProvider.state('app.ergebnisCreate', {
            url: '/ergebnisse/create',
            templateUrl: 'client/templates/ergebnisse/html/ergebnis-create.ng.html',
            controller: 'ErgebnisCreateCtrl',
            data: {
                title: "Ergebnis erstellen",
                hideLeftMenu: false,
                test: function() {
                    console.log(meteor.userId());
                    return "hello";
                }
            }
        });

        // =========== [ Spielorte ] ===========
        $stateProvider.state('app.spielorteHome', {
            url: '/spielorte/home',
            templateUrl: 'client/templates/spielorte/routes/spielorte-home.ng.html',
            controller: 'SpielorteCtrl',
            data: {
                title: "Spielorte Übersicht",
                hideLeftMenu: false
            }
        });

        $stateProvider.state('app.spielortCreate', {
            url: '/spielorte/create',
            templateUrl: 'client/templates/spielorte/routes/spielort-create.ng.html',
            controller: 'SpielortCreateCtrl',
            data: {
                title: "Spielort erstellen",
                hideLeftMenu: false
            }
        });
        $stateProvider.state('app.spielortUpdate', {
            url: '/spielorte/update/:id',
            templateUrl: 'client/templates/spielorte/routes/spielort-update.ng.html',
            controller: 'SpielortUpdateCtrl',
            data: {
                title: "Spielort bearbeiten",
                hideLeftMenu: false
            }
        });

        // =========== [ user accounts ] ===========
        $stateProvider.state('app.user', {
            url: '/user',
            templateUrl: 'client/templates/user/html/user-login.ng.html',
            //controller: 'ErgebnisseCtrl',
            data: {
                title: "Login",
                hideLeftMenu: false
            }
        });

        // =========== [ Otherwise ] ===========
        $urlRouterProvider.otherwise("/ergebnisse/home");

    }
);
