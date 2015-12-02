/**
 * Created by ScreenMagic on 02-12-2015.
 */
// Define our AngularJS application module.
var demo = angular.module('directivesModule');
// -------------------------------------------------- //
// -------------------------------------------------- //
// I execute at priority 500. This time, however, we're going
// to compile and transclude the element - but only on this
// directive - the other three remain exactly the same.
demo.directive(
    "bnOne",
    function() {
        // I compile this element and return the linking
        // function to be used during the linking phase.
        function compile( element, attributes, transclude ) {
            // Store the transclude method on the link (just
            // to make it easier to read this code - this way
            // the link defintion doesn't have to be nested
            // inside the compile function).
            link.transclude = transclude;
            // Return our linking function.
            return( link );
        }
        // I am the controller for this directive.
        function Controller( $scope, $element, $attrs ) {
            this.id = "bnOne";
        }
        // I bind the $scope to the DOM behaviors.
        function link( $scope, element, attributes, controllers ) {
            // At this point, the "element" is the HTML
            // comment node that holds the base for the
            // transcluded element template. Now, we need to
            // include / inject the cloned template element
            // AFTER the comment node.
            //
            // NOTE: We're NOT using $scope.$new() in this
            // case since there's no need for this directive
            // to create a new scope for this clone.
            link.transclude(
                $scope,
                function( clone ) {
                    element.after( clone );
                }
            );
            console.log( "bnOne ( priority: 500 + compile )" );
            console.log( "----", controllers[ 0 ] );
            console.log( "----", controllers[ 1 ] );
            console.log( "----", controllers[ 2 ] );
            console.log( "----", controllers[ 3 ] );
        }
        // Return the directive confirugation. Notice that
        // this directive is (optionally) asking for each
        // controller of the four directives on the given
        // element.
        return({
            compile: compile,
            controller: Controller,
            // link: No link function - compile() returns one.
            //priority: 500,
            require: [ "?bnOne", "?bnTwo", "?bnThree", "?bnFour" ],
            restrict: "A",
            transclude: "element"
        });
    }
);
// -------------------------------------------------- //
// -------------------------------------------------- //
// I execute at priority 500.
demo.directive(
    "bnTwo",
    function() {
        // I am the controller for this directive.
        function Controller( $scope, $element, $attrs ) {
            this.id = "bnTwo";
        }
        // I bind the $scope to the DOM behaviors.
        function link( $scope, element, attributes, controllers ) {
            console.log( "bnTwo ( priority: 500 )" );
            console.log( "----", controllers[ 0 ] );
            console.log( "----", controllers[ 1 ] );
            console.log( "----", controllers[ 2 ] );
            console.log( "----", controllers[ 3 ] );
        }
        // Return the directive confirugation. Notice that
        // this directive is (optionally) asking for each
        // controller of the four directives on the given
        // element.
        return({
            controller: Controller,
            link: link,
            //priority: 500,
            require: [ "?bnOne", "?bnTwo", "?bnThree", "?bnFour" ],
            restrict: "A"
        });
    }
);
// -------------------------------------------------- //
// -------------------------------------------------- //
// I execute at priority 400.
demo.directive(
    "bnThree",
    function() {
        // I am the controller for this directive.
        function Controller( $scope, $element, $attrs ) {
            this.id = "bnThree";
        }
        // I bind the $scope to the DOM behaviors.
        function link( $scope, element, attributes, controllers ) {
            console.log( "bnThree ( priority: 400 )" );
            console.log( "----", controllers[ 0 ] );
            console.log( "----", controllers[ 1 ] );
            console.log( "----", controllers[ 2 ] );
            console.log( "----", controllers[ 3 ] );
        }
        // Return the directive confirugation. Notice that
        // this directive is (optionally) asking for each
        // controller of the four directives on the given
        // element.
        return({
            controller: Controller,
            link: link,
            //priority: 400,
            require: [ "?bnOne", "?bnTwo", "?bnThree", "?bnFour" ],
            restrict: "A"
        });
    }
);
// -------------------------------------------------- //
// -------------------------------------------------- //
// I execute at priority 400.
demo.directive(
    "bnFour",
    function() {
        // I am the controller for this directive.
        function Controller( $scope, $element, $attrs ) {
            this.id = "bnFour";
        }
        // I bind the $scope to the DOM behaviors.
        function link( $scope, element, attributes, controllers ) {
            console.log( "bnFour ( priority: 400 )" );
            console.log( "----", controllers[ 0 ] );
            console.log( "----", controllers[ 1 ] );
            console.log( "----", controllers[ 2 ] );
            console.log( "----", controllers[ 3 ] );
        }
        // Return the directive confirugation. Notice that
        // this directive is (optionally) asking for each
        // controller of the four directives on the given
        // element.
        return({
            controller: Controller,
            link: link,
            //priority: 400,
            require: [ "?bnOne", "?bnTwo", "?bnThree", "?bnFour" ],
            restrict: "A"
        });
    }
);
// -------------------------------------------------- //
// -------------------------------------------------- //
// I am the child directive
demo.directive(
    "bnChild",
    function() {
        // I am the controller for this directive.
        function Controller( $scope, $element, $attrs ) {
            this.id = "bnChild";
        }
        // I bind the $scope to the DOM behaviors.
        function link( $scope, element, attributes, controllers ) {
            console.log( "bnChild" );
            console.log( "----", controllers[ 0 ] );
            console.log( "----", controllers[ 1 ] );
            console.log( "----", controllers[ 2 ] );
            console.log( "----", controllers[ 3 ] );
        }
        // Return the directive confirugation. Notice that
        // this directive is (optionally) asking for each
        // controller of the four directives on the PARENT
        // element.
        return({
            controller: Controller,
            link: link,
            require: [ "?^bnOne", "?^bnTwo", "?^bnThree", "?^bnFour" ],
            restrict: "A"
        });
    }
);
