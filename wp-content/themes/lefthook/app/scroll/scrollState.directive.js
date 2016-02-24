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