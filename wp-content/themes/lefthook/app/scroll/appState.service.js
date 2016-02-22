(function() {
'use strict';

    angular
        .module('lefthook')
        .factory('appStateService', appStateService);

    function appStateService() {
        var state = {
            panels: {
                isHeroVisible: true,
                isMarketingVisible: false,
                isProjectListVisible: false,
                isContactFormVisible: false
            },
            pageView: {
                isHomePageView: true,
                isBlogPageView: false,
                isAboutPageView: false
            },
            components: {
                isMenuActive: false,
                isContactFormActive: false
            }
        };

        //API
        return {
            isHomePageVisible: isHomePageVisible,
            isBlogPageVisible: isBlogPageVisible,
            isAboutPageVisible: isAboutPageVisible,

            isHomePageHeroVisible: isHomePageHeroVisible,
            isHomePageMarketingVisible: isHomePageMarketingVisible,
            isHomePageProjectListVisible: isHomePageProjectListVisible,
            isHomePageContactFormVisible: isHomePageContactFormVisible,

            // add more Sub App states like these? ^^

            showHomePage: showHomePage,
            showHomePageHero: showHomePageHero,
            showBlogPage: showBlogPage,
            showBlogPageHero: showBlogPageHero,
            showAboutPage: showAboutPage

        }

        // Functional Methods -- State Changers

        function showHomePage() {
            state.pageView.isHomePageView = true;
            state.pageView.isBlogPageView = false;
            state.pageView.isAboutPageView = false;
        }

        function showHomePageHero() {
            state.panels.isHeroVisible = true;
            state.panels.isMarketingVisible = false;
            state.panels.isMarketingVisible = false;
            state.panels.isMarketingVisible = false;
            state.pageView.isHomePageView = true;
            state.pageView.isBlogPageView = false;
            state.pageView.isAboutPageView = false;
        }

        function showBlogPage() {
            state.pageView.isHomePageView = false;
            state.pageView.isBlogPageView = true;
            state.pageView.isAboutPageView = false;
        }

        function showBlogPageHero() {
            state.panels.isHeroVisible = true;
            state.panels.isMarketingVisible = false;
            state.panels.isMarketingVisible = false;
            state.panels.isMarketingVisible = false;
            state.pageView.isHomePageView = false;
            state.pageView.isBlogPageView = true;
            state.pageView.isAboutPageView = false;
        }

        function showAboutPage() {
            state.pageView.isHomePageView = false;
            state.pageView.isBlogPageView = false;
            state.pageView.isAboutPageView = true;
        }

        // Functional Methods -- State Queries

        function isHomePageVisible() {
            return state.pageView.isHomePageView &&
                   !state.pageView.isAboutPageView &&
                   !state.pageView.isBlogPageView
        }

        function isBlogPageVisible() {
            return state.pageView.isBlogPageView &&
                   !state.pageView.isAboutPageView &&
                   !state.pageView.isHomePageView
        }

        function isAboutPageVisible() {
            return state.pageView.isAboutPageView &&
                   !state.pageView.isHomePageView &&
                   !state.pageView.isBlogPageView
        }

        // This might be too granular.

        function isHomePageHeroVisible() {
            return state.panels.isHeroVisible && state.pageView.isHomePageView;
        }

        function isHomePageMarketingVisible() {
            return state.panels.isMarketingVisible && state.pageView.isHomePageView;
        }

        function isHomePageProjectListVisible() {
            return state.panels.isProjectListVisible && state.pageView.isHomePageView;
        }

        function isHomePageContactFormVisible() {
            return state.panels.isContactFormVisible && state.pageView.isHomePageView;
        }
    }
})();