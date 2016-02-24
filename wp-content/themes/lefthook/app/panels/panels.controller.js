(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('panelController', panelController);

    panelController.$inject = ['wpPostService', 'appStateService'];
    function panelController(wpPostService, appService) {
        var vm = this;

        var postService = wpPostService;

        //Controller API

        vm.processPanel = processPanel;
        ////////////////

        function processPanel(name) {
            postService.panelRequestPost(name);
        }
    }
})();