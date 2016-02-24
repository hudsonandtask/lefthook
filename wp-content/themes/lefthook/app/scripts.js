(function () {
    angular.module('lefthook', ['ngRoute', 'angular-inview']);
})();

(function () {
    angular.module('lefthook')
        .config(function ($routeProvider, $locationProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: myLocalized.app + 'main/main.html',
                    controller: 'Main',
                    controllerAs: 'vm'
                })
                .when('/about', {
                    templateUrl: myLocalized.app + 'about/about.html',
                    controller: 'aboutCtrl',
                    controllerAs: 'about'
                })
                .when('/blog', {
                    templateUrl: myLocalized.app + 'blog/blog.html',
                    controller: 'blogCtrl',
                    controllerAs: 'blog'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $locationProvider.html5Mode(true);
         });
})();
(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('aboutCtrl', aboutCtrl);

    function aboutCtrl() {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            alert('I am the about page');
         }
    }
})();
(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('blogCtrl', blogCtrl);


    function blogCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            alert('I am Blog');
        }
    }
})();
(function () {
    angular.module('lefthook')
        .controller('Main', mainController);
    function mainController(wpPostService, appStateService) {
        var vm = this;

        vm.post = {};
        vm.handleScroll = handleScroll;

        wpPostService.getAllPost().then(function (result) {
            vm.post = result;
            var appState = appStateService;

        });

        function handleScroll(name) {
            console.log(name);
        }

    }
    mainController.$inject = [
        'wpPostService',
        'appStateService'
    ]
})();
(function() {
    'use strict';

    angular
        .module('lefthook')
        .directive('menuDirective', menuDirective);

    function menuDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ControllerController,
            templateUrl: myLocalized.app + 'menu/menu.html',
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            replace:true,
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function ControllerController () {

    }
})();
(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('panelController', panelController);

    panelController.$inject = ['wpPostService', 'appStateService'];
    function panelController(wpPostService, appService) {
        var vm = this;

        var postService = wpPostService;

        //Controller API

        vm.processPanel = processPanel;
        ////////////////

        function processPanel(name) {
            postService.panelRequestPost(name);
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('lefthook')
        .directive('panel', panel);

    panel.$inject = ['wpPostService', 'appStateService'];
    function panel(wpPostService, appService) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            controller: 'panelController',
            link: link,
            restrict: 'E',
            scope: {
                panelName: '@',
                postCount:'@'
            }
        };
        return directive;

        function link(scope, element, attrs, controller) {
            var name = scope.panelName;
            var panelController = controller;

            panelController.processPanel(name);
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('lefthook')
        .directive('scrollState', scrollState);

    scrollState.$inject = ['wpPostService'];
    function scrollState(wpPostService) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: scrollStateController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };

        return directive;

        function link(scope, element, attrs) {
            var baseEl = element[0];

            element.bind('scroll', function () {
                console.log('in a Scroll', baseEl.scrollTop, baseEl.offsetHeight);
            });
        }
    }
    /* @ngInject */
    function scrollStateController () {

    }
})();
(function() {
'use strict';

    angular
        .module('lefthook')
        .factory('appStateService', appStateService);

    function appStateService() {
        var state = {
            panels: {
                isHeroVisible: true,
                isMarketingVisible: false,
                isProjectListVisible: false,
                isContactFormVisible: false
            },
            pageView: {
                isHomePageView: true,
                isBlogPageView: false,
                isAboutPageView: false
            },
            components: {
                isMenuActive: false,
                isContactFormActive: false
            }
        };

        //API
        return {
            isHomePageVisible: isHomePageVisible,
            isBlogPageVisible: isBlogPageVisible,
            isAboutPageVisible: isAboutPageVisible,

            isHomePageHeroVisible: isHomePageHeroVisible,
            isHomePageMarketingVisible: isHomePageMarketingVisible,
            isHomePageProjectListVisible: isHomePageProjectListVisible,
            isHomePageContactFormVisible: isHomePageContactFormVisible,

            // add more Sub App states like these? ^^

            showHomePage: showHomePage,
            showHomePageHero: showHomePageHero,
            showBlogPage: showBlogPage,
            showBlogPageHero: showBlogPageHero,
            showAboutPage: showAboutPage

        }

        // Functional Methods -- State Changers

        function showHomePage() {
            state.pageView.isHomePageView = true;
            state.pageView.isBlogPageView = false;
            state.pageView.isAboutPageView = false;
        }

        function showHomePageHero() {
            state.panels.isHeroVisible = true;
            state.panels.isMarketingVisible = false;
            state.panels.isMarketingVisible = false;
            state.panels.isMarketingVisible = false;
            state.pageView.isHomePageView = true;
            state.pageView.isBlogPageView = false;
            state.pageView.isAboutPageView = false;
        }

        function showBlogPage() {
            state.pageView.isHomePageView = false;
            state.pageView.isBlogPageView = true;
            state.pageView.isAboutPageView = false;
        }

        function showBlogPageHero() {
            state.panels.isHeroVisible = true;
            state.panels.isMarketingVisible = false;
            state.panels.isMarketingVisible = false;
            state.panels.isMarketingVisible = false;
            state.pageView.isHomePageView = false;
            state.pageView.isBlogPageView = true;
            state.pageView.isAboutPageView = false;
        }

        function showAboutPage() {
            state.pageView.isHomePageView = false;
            state.pageView.isBlogPageView = false;
            state.pageView.isAboutPageView = true;
        }

        // Functional Methods -- State Queries

        function isHomePageVisible() {
            return state.pageView.isHomePageView &&
                   !state.pageView.isAboutPageView &&
                   !state.pageView.isBlogPageView
        }

        function isBlogPageVisible() {
            return state.pageView.isBlogPageView &&
                   !state.pageView.isAboutPageView &&
                   !state.pageView.isHomePageView
        }

        function isAboutPageVisible() {
            return state.pageView.isAboutPageView &&
                   !state.pageView.isHomePageView &&
                   !state.pageView.isBlogPageView
        }

        // This might be too granular.

        function isHomePageHeroVisible() {
            return state.panels.isHeroVisible && state.pageView.isHomePageView;
        }

        function isHomePageMarketingVisible() {
            return state.panels.isMarketingVisible && state.pageView.isHomePageView;
        }

        function isHomePageProjectListVisible() {
            return state.panels.isProjectListVisible && state.pageView.isHomePageView;
        }

        function isHomePageContactFormVisible() {
            return state.panels.isContactFormVisible && state.pageView.isHomePageView;
        }
    }
})();
/* global myLocalized */
(function () {
    angular.module('lefthook')
        .factory('wpPostService', wpPostService);
    function wpPostService($http, $sce) {

        // Api
        return {
            panelRequestPost:panelRequestPost,
            getAllPost: getAllPost,
            getBannerHeaderPost:getBannerHeaderPost
        }

        // Methods

        function panelRequestPost(name) {
            switch (name){
                case 'hero':
                    //alert(name);
                    // Call specific function for this Panels Post
                    break;
                case 'marketing':
                    //alert(name);
                    // Call specific function for this Panels Post
                    break;
                case 'blog':
                    //alert(name);
                    // Call specific function for this Panels Post
                    break;
            }
        }

        function getAllPost() {
            return getData('posts');
        }

        function getBannerHeaderPost() {
            return getData('posts/?category_name=bannerheader');
        }
        // Helper Methods

        function getData(url) {
            return $http.get(myLocalized.api_url + 'wp/v2/' + url)
                .then(function (response) {
                    if (response.data instanceof Array) {
                        var items = response.data.map(function (item) {
                            return decorateResults(item);
                        });
                        return items;
                    }
                    else {
                        decorateResults(response.data);
                    }
                });
        }

        function decorateResults(result) {
            result.excerpt = $sce.trustAsHtml(result.excerpt.rendered);
            result.date = Date.parse(result.date);
            result.content = $sce.trustAsHtml(result.content.rendered);
            return result;
        }
    }
})();