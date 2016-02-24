(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('blogCtrl', blogCtrl);


    function blogCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            alert('I am Blog');
        }
    }
})();