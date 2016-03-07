(function() {
    'use strict';

    angular
        .module('lefthook')
        .directive('posts', posts);

    posts.$inject = [];

    function posts() {
        var directive = {
            link: link,
            restrict: 'E',
            scope: {
                postDisplyName: '@',
            }
        };

        return directive;

        function link() {

        }
    }

})();