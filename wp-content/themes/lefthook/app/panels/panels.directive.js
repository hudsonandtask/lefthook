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