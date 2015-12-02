/**
 * magic chips angular app
 * Version: 0.1
 */

/**
 * "use strict;" enables strict operating context. It prevents certain actions from being taken and throws more exceptions
 * With strict mode, you can not, for example, use undeclared variables.
 * http://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
 */

"use strict";

/**
 * define an angular module called myApp
 * [...] - for dependency injection. module can depend on other modules
 * [Style Y023]
 * Only set once and get for all other instances.
 * https://github.com/johnpapa/angular-styleguide#style-y023
 */

angular
  .module('directivesModule', [
        'ui.router'
    ])
  .config(function ($stateProvider, $urlRouterProvider) {

    var viewBase = '/app/';

    $stateProvider
      .state('transclusion1', {
        url: '/isolated-scope-with-transclusion',
        data: {
          pageTitle: 'Transclusion'
        },
        views: {
          'content': {
            controller: 'TransclusionCtrl',
            templateUrl: viewBase + 'transclusion/isolated-scope-with-transclusion.html'
          }
        }
      })
      .state('dataDriven1', {
        url: '/isolate-scope-with-controller',
        data: {
          pageTitle: 'Controller'
        },
        views: {
          'content': {
            controller: 'DataDrivenCtrl',
            templateUrl: viewBase + 'data-driven/isolate-scope-with-controller.html'
          }
        }
      })
      .state('executionOrder1', {
        url: '/execution-order',
        data: {
          pageTitle: 'Execution order'
        },
        views: {
          'content': {
            templateUrl: viewBase + 'execution-order/execution-order.html'
          }
        }
      });
      //.state('scope1', {
      //  url: '/scope',
      //  data: {
      //    pageTitle: 'Scope'
      //  },
      //  views: {
      //    'content': {
      //      controller: 'CustomersController',
      //      templateUrl: viewBase + 'scope/scope.html'
      //    }
      //  }
      //});

    $urlRouterProvider.otherwise('/isolate-scope-with-controller');
 
  });
