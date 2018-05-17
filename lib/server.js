(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var getMyReviews = function () {
    var user = new Yelp(keys.yelpKeys);

      var params = {screen_name: 'inrtracker'};
        user.get('reviews/user_timeline', params, function(error, response){
          if (!error) {
            //console.log(reviews);
            for(var i=0; i < reviews.length; i++){
              console.log(reviews[i].created_at);
              console.log('');
              console.log(reviews[i].text);
      }
    }
  });
}
},{}]},{},[1]);
