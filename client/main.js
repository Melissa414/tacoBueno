// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.yelp.com/", false);
// xhr.send();

var locations;
var food;
var ratings;

// function newSearch() {
//   $(".searchBar").empty();
//     $("#searchBtn").on('click', function (){
//           var inputVal = $(".searchBar").val();
//             newSearch(inputVal);
//             console.log("working");


// return false;
//   })
// };

// function getResponse() {
//     $("#one").empty();

// var apiKey = "A6GkgtsWRapq-05zuRUZJk3-H3CmXGg6cMVi2sC2KvQ2UuWHsFZFGEJeL_wvBn3ylhB3oPmTY7hOtTq0j05MlJWvmQrxUWGjHtaFLCu_BuvA1fM_RrM6iHfJr8TfWnYx";

// $.ajax({
//             url: apiKey,
//             method: 'GET'
//         })
//         .done(function(response) {
//             console.log(response);

//            var results = response.data;
//     })
// };

// var json = JSON.parse(apiKey);
// console.log(json);
// 
function newSearch() {
   // $(".searchBar").empty();
    $("#searchBtn").click( function (){
      var inputVal = $(".searchBar").val();
        console.log("working");
    })
};

function getResponse() {
      var apiKey = "A6GkgtsWRapq-05zuRUZJk3-H3CmXGg6cMVi2sC2KvQ2UuWHsFZFGEJeL_wvBn3ylhB3oPmTY7hOtTq0j05MlJWvmQrxUWGjHtaFLCu_BuvA1fM_RrM6iHfJr8TfWnYx";

      $.ajax({
            url: queryUrl,
            method: 'GET'
        })
      .done(function(response){
            console.log(response);

            $.each(function(key, value) {
                var container = $("<div>");
                container.attr("id");

                var review = value;
                container.append(newImage);


            });
      });
};