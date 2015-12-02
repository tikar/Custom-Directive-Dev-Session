/**
 * Created by ScreenMagic on 02-12-2015.
 */
var app = angular.module('directivesModule');

app.directive('domDirective', function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.on('click', function () {
                element.html('You clicked me!');
            });
            element.on('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.on('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
});