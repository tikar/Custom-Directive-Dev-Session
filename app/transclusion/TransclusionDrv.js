/**
 * Created by ScreenMagic on 02-12-2015.
 */
angular.module('directivesModule').directive('isolatedScopeWithTransclusion', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            tasks: '='
        },
        controller: function ($scope) {
            $scope.addTask = function () {

                if (!$scope.tasks) $scope.tasks = [];

                $scope.tasks.push({
                    title: $scope.title
                });

            };
        },
        template: '<div>Name: <input type="text" ng-model="title" />&nbsp;' +
        '<button ng-click="addTask()">Add Task</button>' +
        '<div class="taskContainer"><br />' +
        '<ng-transclude></ng-transclude>' +
        '</div></div>'
    };
});