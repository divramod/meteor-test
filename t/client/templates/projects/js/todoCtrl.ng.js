angular.module('app.example').controller('TodoCtrl',
    function($scope, $meteorCollection, $ionicModal, $rootScope, $ionicSideMenuDelegate, $ionicPopup, $cordovaDatePicker, $cordovaDevice) {

        // =========== [ test ] ===========
        $scope.isCordova = Meteor.isCordova;
        if (Meteor.isCordova) {
            $scope.platform = $cordovaDevice.getPlatform();
        }

        // =========== [ original ] ===========
        $scope.Projects = $meteorCollection(Projects);
        $scope.Tasks = $meteorCollection(Tasks);

        // =========== [ PROJECT ] ===========
        // A utility function for creating a new project
        // with the given projectTitle
        var createProject = function(projectTitle) {
            var newProject = {
                title: projectTitle,
                active: false
            };
            $scope.Projects.save(newProject).then(function(res) {
                if (res) {
                    $scope.selectProject(newProject, $scope.Projects.length - 1);
                }
            });
        };

        // Called to create a new project
        $scope.newProject = function() {
            $ionicPopup.prompt({
                title: 'New Project',
                subTitle: 'Name:'
            }).then(function(res) {
                if (res) {
                    createProject(res);
                }
            });
        };

        // Grab the last active, or the first project
        $scope.activeProject = function() {
            var activeProject = $scope.Projects[0];
            angular.forEach($scope.Projects, function(v, k) {
                if (v.active) {
                    activeProject = v;
                }
            });
            return activeProject;
        };

        // Called to select the given project
        $scope.selectProject = function(project, index) {
            var selectedProject = $scope.Projects[index];
            angular.forEach($scope.Projects, function(v, k) {
                v.active = false;
            });
            selectedProject.active = true;
            $ionicSideMenuDelegate.toggleLeft();
        };

        // =========== [ TASK ] ===========

        // Create our modal
        $ionicModal.fromTemplateUrl('client/templates/projects/html/new-task.ng.html', function(modal) {
            $scope.taskModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });

        //Cleanup the modal when we are done with it!
        $scope.$on('$destroy', function() {
            $scope.taskModal.remove();
        });

        $scope.createTask = function(task) {
            var activeProject = $scope.activeProject();
            if (!activeProject || !task.title) {
                return;
            }

            $scope.Tasks.save({
                project: activeProject._id,
                title: task.title
            });

            $scope.taskModal.hide();

            task.title = "";
        };

        $scope.deleteTask = function(task) {
            $scope.Tasks.delete(task);
        };

        $scope.newTask = function() {
            $scope.task = {};
            $scope.taskModal.show();
        };

        $scope.closeNewTask = function() {
            $scope.taskModal.hide();
        };

        $scope.toggleProjects = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.pickDate = function(task) {
            var options = {
                date: new Date(),
                mode: 'date'
            };
            //var options = {date: new Date(), mode: 'time'}; for time
            $cordovaDatePicker.show(options).then(function(date) {
                task.date = date;
            });
        }
    }
);
