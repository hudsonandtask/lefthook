(function() {
'use strict';

    angular
        .module('lefthook')
        .controller('postController', postController);

    postController.$inject = [];
    function postController() {
        var vm = this;

    //     console.log('post i am loaded');

    //     vm.getTemplateUrl = getTemplateUrl;

    //    function getTemplateUrl(templateType){
    //         var template =  '';

    //         switch(templateType){
    //             case 'hero':
    //                 template = myLocalized.app + 'posts/post/views/hero.posts.html';
    //                 break;
    //             case 'marketing':
    //                 template = myLocalized.app + 'post/posts/views/marketing.posts.html';
    //                 break;
    //             case 'projects':
    //                  template = myLocalized.app + 'post/posts/views/projects.posts.html';
    //         }

    //         return template;
    //     }
    }
})();