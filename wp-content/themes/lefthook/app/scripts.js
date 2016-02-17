(function () {
    angular.module('lefthook', ['ngRoute']);
})();

(function () {
    angular.module('lefthook')
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(false);

            $routeProvider.when('/', {
                templateUrl: myLocalized.app + 'main/main.html',
                controller:'Main'
            });
         });
})();
(function () {
    angular.module('lefthook')
        .controller('Main', mainController);
    function mainController() {
        console.log('I am loaded son what up');
    }
})();