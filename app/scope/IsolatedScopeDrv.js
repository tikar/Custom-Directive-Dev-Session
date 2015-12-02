/**
 * Created by ScreenMagic on 02-12-2015.
 */
angular.module('directivesModule').directive('myIsolatedScope', function () {
    return {
        scope: {},
        template: 'Name: {{customer.name}} Street: {{customer.street}}'
    };
});
angular.module('directivesModule').directive('myIsolatedScopeWithName', function () {
    return {
        scope: {
            name: '@'
        },
        template: 'Name: {{ name }}'
    };
});
angular.module('directivesModule').directive('myIsolatedScopeWithModelAndFunction', function () {
    return {
        scope: {
            datasource: '=',
            action: '&'
        },
        template: '<ul><li ng-repeat="prop in datasource">{{ prop }}</li></ul> ' +
        '<button ng-click="action()">Change Data</button>'
    };
});