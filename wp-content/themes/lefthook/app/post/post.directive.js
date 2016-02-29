(function() {
    'use strict';

    angular
        .module('lefthook')
        .directive('posts', posts);

    posts.$inject = [

    ];

    function posts() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: 'postsController',
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                postName: '@',
                 data:'='
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();