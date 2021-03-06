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