(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('panelController', panelController);

    panelController.$inject = ['wpPostService'];

    function panelController(wpPostService) {
        var vm = this;

        //var postService = wpPostService;

    }
})();