/* global myLocalized */
(function () {
    angular.module('lefthook')
        .factory('wpPostService', wpPostService);
    function wpPostService($http, $sce) {

        // Api
        return {
            getAllPost: getAllPost,
            getBannerHeaderPost:getBannerHeaderPost
        }

        // Methods
        function getAllPost() {
            return getData('posts');
        }

        function getBannerHeaderPost() {
            return getData('posts/?category_name=bannerheader');
        }
        // Helper Methods

        function getData(url) {
            return $http.get(myLocalized.api_url + 'wp/v2/' + url)
                .then(function (response) {
                    if (response.data instanceof Array) {
                        var items = response.data.map(function (item) {
                            return decorateResults(item);
                        });
                        return items;
                    }
                    else {
                        decorateResults(response.data);
                    }
                });
        }

        function decorateResults(result) {
            result.excerpt = $sce.trustAsHtml(result.excerpt.rendered);
            result.date = Date.parse(result.date);
            result.content = $sce.trustAsHtml(result.content.rendered);
            return result;
        }
    }
})();