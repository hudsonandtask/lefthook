(function () {
    angular.module('lefthook')
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(false);

            $routeProvider.when('/', {
                templateUrl: myLocalized.app + 'main/main.html',
                controller: 'Main',
                controllerAs:'vm'
            });
         });
})();