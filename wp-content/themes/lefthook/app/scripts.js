(function () {
    angular.module('lefthook', ['ngRoute', 'angular-inview']);
})();

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
(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('aboutCtrl', aboutCtrl);

    aboutCtrl.$inject = [
        'wpPostService',
        'appStateService'
    ];

    function aboutCtrl(wpPostService, appStateService) {
        var vm = this;

        vm.post = {};
        vm.setViewModel = setViewModel;

        wpPostService.getPagePost('about').then(function (item) {
            setViewModel(item);
        });

        function setViewModel(responseItem) {
            angular.forEach(responseItem, function (responseValue, responseIndex) {
                vm.post[responseIndex] = responseValue;
            });
        }
    }
})();
(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('blogCtrl', blogCtrl);

    blogCtrl.$inject = [
        'wpPostService',
        'appStateService'
    ];

    function blogCtrl(wpPostService, appStateService) {
       var vm = this;

        vm.post = {};

        wpPostService.panelRequestPost('hero').then(function (json) {
            vm.post.hero = json;
        });

        wpPostService.panelRequestPost('marketing').then(function (json) {
            vm.post.marketing = json;
        });

        wpPostService.panelRequestPost('projects').then(function (json) {
            vm.post.projects = json;
        });

    }
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
(function () {
    angular
        .module('lefthook')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = [
        'wpPostService',
        'appStateService'
    ];

    function homeCtrl(wpPostService, appStateService) {
        var vm = this;

        vm.post = {};

        // wpPostService.panelRequestPost('hero').then(function (json) {
        //     vm.post.hero = json;
        // });

        // wpPostService.panelRequestPost('marketing').then(function (json) {
        //     vm.post.marketing = json;
        // });

        // wpPostService.panelRequestPost('projects').then(function (json) {
        //     vm.post.projects = json;
        // });

    }
})();
(function() {
    'use strict';

    angular
        .module('lefthook')
        .directive('lhInclude', lhInclude);

    lhInclude.$inject = ['$compile'];

    function lhInclude($compile) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            templateUrl: function(tElement, tAttrs) {
                return getTemplateUrl(tAttrs.panelName);
            },
            scope:false

        };
        return directive;

        function link(scope, element, attrs) {

        }

        function getTemplateUrl(templateType) {
            var template = '';

            switch (templateType) {
                case 'hero':
                    template = myLocalized.app + 'panels/views/hero.panel.html';
                    break;
                case 'marketing':
                    template = myLocalized.app + 'panels/views/marketing.panel.html';
                    break;
                case 'projects':
                    template = myLocalized.app + 'panels/views/projects.panel.html';
            }
            return template;
        };
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
            // var baseEl = element[0];

            // element.bind('scroll', function () {
            //     console.log('in a Scroll', baseEl.scrollTop, baseEl.offsetHeight);
            // });
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
        .controller('panelController', panelController);

    panelController.$inject = ['wpPostService'];

    function panelController(wpPostService) {
        var vm = this;

        //var postService = wpPostService;

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
                postCount: '@',
                data: '='
            }
        };
        return directive;

        function link(scope, element, attrs, controller, transclude) {

        }
    }
})();
(function() {
'use strict';

    angular
        .module('lefthook')
        .factory('appSettings', appSettings);

    function appSettings() {
        return {
            jsonRequestPageSettings: {
                home: ['hero', 'marketing', 'projects'],
                about: ['hero', 'marketing', 'projects'],
                blog: ['blog', 'marketing', 'projects']
            }
        };
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
    //data
    angular.module('lefthook')
        .factory('wpPostService', wpPostService);

    wpPostService.$inject = [
        '$http',
        '$sce',
        'appSettings',
        '$q'
    ];

    function wpPostService($http, $sce, appSettings, $q) {

        // Api
        return {
            panelRequestPost:panelRequestPost,
            getPagePost:getPagePost
        }

        // Methods

        function getPagePost(page) {
            var settings = appSettings.jsonRequestPageSettings[page];
            var promisesArray =[];

            angular.forEach(settings, function (value, key) {
                // Set up Promises to store in an Array
                var response = panelRequestPost(value);
                promisesArray.push(response);
            });

            // Resolve/Unpack Promises at once
            return $q.all(promisesArray).then(function (jsonResults) {
                var obj = {};
                angular.forEach(settings, function (settingsKey, settingsIndex) {
                    obj[settingsKey] = jsonResults[settingsIndex];
                });
                return obj;
            });
        }

        function panelRequestPost(name) {
            switch (name){
                case 'hero':
                    return getData('posts?filter[category_name]=hero');
                    break;
                case 'marketing':
                    return getData('posts?filter[category_name]=marketing');
                    break;
                case 'blog':
                    return getData('posts?filter[category_name]=blog');
                    break;
                case 'projects':
                    return getData('posts?filter[category_name]=projects');
                    break;
            }
        }

        // Helper Methods

        // $http request handler
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