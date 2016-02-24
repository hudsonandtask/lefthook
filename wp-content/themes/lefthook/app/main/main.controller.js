(function () {
    angular.module('lefthook')
        .controller('Main', mainController);
    function mainController(wpPostService, appStateService) {
        var vm = this;

        vm.post = {};
        vm.handleScroll = handleScroll;

        wpPostService.getAllPost().then(function (result) {
            vm.post = result;
            var appState = appStateService;

        });

        function handleScroll(name) {
            console.log(name);
        }

    }
    mainController.$inject = [
        'wpPostService',
        'appStateService'
    ]
})();