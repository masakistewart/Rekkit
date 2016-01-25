var app = angular.module('Rekkit', ['ngAnimate','angularMoment'])

app.controller('RekkitCtrl', function($scope){
	$scope.items = [{
        title: 'The Three Musketeers + 1 duck',
        description: 'A story of love, death and fowl betrayal',
        image: 'http://thumbs.dreamstime.com/x/angry-duck-clipping-path-620949.jpg',
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 0,
        commentBool: true,
        comments: [{
            comment: 'coolski',
            author: 'coolski'
        }]
    }];
    
    $scope.showComments = function(item) {
        if (item.commentBool === true) {
            item.commentBool = false;
        } else {
            item.commentBool = true;
        }
    }

    $scope.search = {
        string: ''
    }

    $scope.item = {
        votes: 0,
        createdAt: Date.now()
    };

    $scope.showForm = true;

    $scope.showF = function() {
        if ($scope.showForm === true) {
            $scope.showForm = false;
        } else {
            $scope.showForm = true;
        }
        console.log('hit')
    }
    $scope.upVote = function(item) {
        item.votes += 1;
    }
    $scope.downVote = function(item) {
        item.votes -= 1;
    }
    $scope.addPost = function(item, myForm) {
        if(myForm.$valid){
            item.votes = 0;
            item.createdAt = Date.now();
            item.commentBool = true;
            $scope.items.push(item);
            $scope.item = {};
        } else {
            console.log(myForm);
        }
    }
})

app.animation('.slide', [function() {
    return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    enter: function(element, doneFn) {
    jQuery(element).slideDown(1000, doneFn)
    // remember to call doneFn so that angular
    // knows that the animation has concluded
    },

    move: function(element, doneFn) {
    jQuery(element).fadeIn(1000, doneFn);
    },

    leave: function(element, doneFn) {
    jQuery(element).slideUp(1000, doneFn)
    }
}
}]);