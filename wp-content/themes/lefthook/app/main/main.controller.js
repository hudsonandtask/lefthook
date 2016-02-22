(function () {
    angular.module('lefthook')
        .controller('Main', mainController);
    function mainController(wpPostService, appStateService) {
        var vm = this;

        vm.post = {};

        wpPostService.getAllPost().then(function (result) {
            vm.post = result;
            var appState = appStateService;

            console.log(vm.post);
        });
    }
    mainController.$inject = [
        'wpPostService',
        'appStateService'
    ]
})();