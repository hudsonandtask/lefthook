(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('aboutCtrl', aboutCtrl);

    function aboutCtrl() {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            alert('I am the about page');
         }
    }
})();