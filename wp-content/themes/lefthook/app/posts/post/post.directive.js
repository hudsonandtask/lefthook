(function() {
    'use strict';

    angular
        .module('lefthook')
        .directive('post', post);

    post.$inject = [];

    function post() {
        // Usage:
        //
        // Creates:
        //
        var directive = {

            link: link,
            restrict: 'E',
            controller: 'postController',
            scope: {},
            replace: true,
            transclude:false,
            template: '<ng-include src="getTemplateUrl()"/>'
        };

        return directive;

        function link(scope, element, attrs, controller) {

            scope.getTemplateUrl = function () {
                return myLocalized.app + 'posts/post/views/hero.posts.html';
            }


        }
    }

})();