/**
 * Created by ScreenMagic on 02-12-2015.
 */
angular.module('directivesModule').directive('mySharedScope', function () {
    return {
        template: 'Name: {{customer.name}} Street: {{customer.street}}'
    };
});

