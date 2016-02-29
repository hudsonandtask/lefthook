(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('aboutCtrl', aboutCtrl);

    aboutCtrl.$inject = [
        'wpPostService',
        'appStateService'
    ];

    function aboutCtrl(wpPostService, appStateService) {
        var vm = this;

        vm.post = {};
        vm.setViewModel = setViewModel;

        wpPostService.getPagePost('about').then(function (item) {
            setViewModel(item);
        });

        function setViewModel(responseItem) {
            angular.forEach(responseItem, function (responseValue, responseIndex) {
                vm.post[responseIndex] = responseValue;
            });
        }
    }
})();