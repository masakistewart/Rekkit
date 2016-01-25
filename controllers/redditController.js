var app = angular.module('Rekkit', ['ngAnimate','angularMoment'])

app.controller('RekkitCtrl', function($scope){
	$scope.items = [
    {
        title: 'The Three Musketeers + 1 duck',
        description: "Bitters typewriter 8-bit, PBR&B vice cronut williamsburg pitchfork. Master cleanse locavore etsy, brunch williamsburg cold-pressed butcher yuccie craft beer waistcoat meditation swag blue bottle retro. Tattooed etsy vice try-hard kitsch jean shorts. Viral ugh franzen, waistcoat chambray four dollar toast tumblr slow-carb fixie literally put a bird on it poutine celiac. 8-bit celiac roof party normcore ethical meggings pinterest, four dollar toast semiotics. Fixie cornhole mlkshk, organic chillwave forage gluten-free butcher salvia paleo you probably haven't heard of them yuccie. Pabst hashtag hammock, fingerstache truffaut wolf tattooed.",
        image: 'http://thumbs.dreamstime.com/x/angry-duck-clipping-path-620949.jpg',
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 1,
        commentBool: true,
        comments: [{
            comment: 'coolski',
            author: 'coolski'
        }],
        addCommentsBool: true
    },
    {
        title: 'Cairo Is Uber Cool',
        description: "Bitters typewriter 8-bit, PBR&B vice cronut williamsburg pitchfork. Master cleanse locavore etsy, brunch williamsburg cold-pressed butcher yuccie craft beer waistcoat meditation swag blue bottle retro. Tattooed etsy vice try-hard kitsch jean shorts. Viral ugh franzen, waistcoat chambray four dollar toast tumblr slow-carb fixie literally put a bird on it poutine celiac. 8-bit celiac roof party normcore ethical meggings pinterest, four dollar toast semiotics. Fixie cornhole mlkshk, organic chillwave forage gluten-free butcher salvia paleo you probably haven't heard of them yuccie. Pabst hashtag hammock, fingerstache truffaut wolf tattooed.",
        image: 'http://thumbs.dreamstime.com/x/angry-duck-clipping-path-620949.jpg',
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 5,
        commentBool: true,
        comments: [{
            comment: 'coolski',
            author: 'coolski'
        }],
        addCommentsBool: true
    },
    {
        title: 'Is I a Master',
        description: "Bitters typewriter 8-bit, PBR&B vice cronut williamsburg pitchfork. Master cleanse locavore etsy, brunch williamsburg cold-pressed butcher yuccie craft beer waistcoat meditation swag blue bottle retro. Tattooed etsy vice try-hard kitsch jean shorts. Viral ugh franzen, waistcoat chambray four dollar toast tumblr slow-carb fixie literally put a bird on it poutine celiac. 8-bit celiac roof party normcore ethical meggings pinterest, four dollar toast semiotics. Fixie cornhole mlkshk, organic chillwave forage gluten-free butcher salvia paleo you probably haven't heard of them yuccie. Pabst hashtag hammock, fingerstache truffaut wolf tattooed.",
        image: 'http://thumbs.dreamstime.com/x/angry-duck-clipping-path-620949.jpg',
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 30,
        commentBool: true,
        comments: [{
            comment: 'coolski',
            author: 'coolski'
        }],
        addCommentsBool: true
    },
    {
        title: 'ZOMG',
        description: 'A story of love, death and fowl betrayal',
        image: "",
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 0,
        commentBool: true,
        comments: [{
            comment: 'coolski',
            author: 'coolski'
        }],
        addCommentsBool: true
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

    $scope.comment = {

    }

    $scope.item = {
        votes: 0,
        createdAt: Date.now()
    };

    $scope.showForm = true;
    $scope.addAComment = function(item) {
        if (item.addCommentsBool === true) {
            item.addCommentsBool = false;
        } else {
            item.addCommentsBool = true;
        }
    }
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
            item.addCommentsBool = true;
            $scope.items.push(item);
            $scope.item = {};
        } else {
            console.log(myForm);
        }
    }
    $scope.addComment = function(comment, item){
        item.comments.push(comment);
        comment = {};
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