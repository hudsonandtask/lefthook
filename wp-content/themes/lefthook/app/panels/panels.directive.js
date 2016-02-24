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