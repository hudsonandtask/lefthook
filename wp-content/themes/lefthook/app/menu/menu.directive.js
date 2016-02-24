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