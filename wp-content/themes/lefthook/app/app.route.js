(function () {
    angular.module('lefthook')
        .config(function ($routeProvider, $locationProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: myLocalized.app + 'home/home.html',
                    controller: 'homeCtrl',
                    controllerAs: 'vm'
                })
                .when('/about', {
                    templateUrl: myLocalized.app + 'about/about.html',
                    controller: 'aboutCtrl',
                    controllerAs: 'vm'
                })
                .when('/blog', {
                    templateUrl: myLocalized.app + 'blog/blog.html',
                    controller: 'blogCtrl',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $locationProvider.html5Mode(true);
         });
})();