/* global myLocalized */
(function () {
    //data
    angular.module('lefthook')
        .factory('wpPostService', wpPostService);

    wpPostService.$inject = [
        '$http',
        '$sce',
        'appSettings',
        '$q'
    ];

    function wpPostService($http, $sce, appSettings, $q) {

        // Api
        return {
            panelRequestPost:panelRequestPost,
            getPagePost:getPagePost
        }

        // Methods

        function getPagePost(page) {
            var settings = appSettings.jsonRequestPageSettings[page];
            var promisesArray =[];

            angular.forEach(settings, function (value, key) {
                // Set up Promises to store in an Array
                var response = panelRequestPost(value);
                promisesArray.push(response);
            });

            // Resolve/Unpack Promises at once
            return $q.all(promisesArray).then(function (jsonResults) {
                var obj = {};
                angular.forEach(settings, function (settingsKey, settingsIndex) {
                    obj[settingsKey] = jsonResults[settingsIndex];
                });
                return obj;
            });
        }

        function panelRequestPost(name) {
            switch (name){
                case 'hero':
                    return getData('posts?filter[category_name]=hero');
                    break;
                case 'marketing':
                    return getData('posts?filter[category_name]=marketing');
                    break;
                case 'blog':
                    return getData('posts?filter[category_name]=blog');
                    break;
                case 'projects':
                    return getData('posts?filter[category_name]=projects');
                    break;
            }
        }

        // Helper Methods

        // $http request handler
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