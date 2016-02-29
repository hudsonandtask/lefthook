(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('postsController', postsController);

    postsController.$inject = [];
    function postsController() {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            console.log('I am active');
         }
    }
})();