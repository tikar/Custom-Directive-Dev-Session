/**
 * Created by ScreenMagic on 02-12-2015.
 */

var app = angular.module('directivesModule');

app.directive('isolateScopeWithController', function () {

    var controller = ['$scope', function ($scope) {

            function init() {
                $scope.items = angular.copy($scope.datasource);
            }

            init();

            $scope.addItem = function () {
                $scope.add();

                //Add new customer to directive scope
                $scope.items.push({
                    name: 'New Directive Controller Item'
                });
            };
        }],

        template = '<button ng-click="addItem()">Add Item</button><ul>' +
            '<li ng-repeat="item in items">{{ ::item.name }}</li></ul>';

    return {
        restrict: 'EA', //Default in 1.3+
        scope: {
            datasource: '=',
            add: '&',
        },
        controller: controller,
        template: template
    };
});
app.directive('isolateScopeWithControllerAs', function () {

    var controller = function () {

        var vm = this;

        function init() {
            vm.items = angular.copy(vm.datasource);
        }

        init();

        vm.addItem = function () {
            vm.add();

            //Add new customer to directive scope
            vm.items.push({
                name: 'New Directive Controller Item'
            });
        };
    };

    var template = '<button ng-click="vm.addItem()">Add Item</button>' +
        '<ul><li ng-repeat="item in vm.items">{{ ::item.name }}</li></ul>';

    return {
        restrict: 'EA', //Default for 1.3+
        scope: {
            datasource: '=',
            add: '&',
        },
        controller: controller,
        controllerAs: 'vm',
        bindToController: true, //required in 1.3+ with controllerAs
        template: template
    };
});
