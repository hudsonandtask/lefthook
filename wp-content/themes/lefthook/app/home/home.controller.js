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