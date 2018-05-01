var locations;
var food;
var ratings;

function newSearch() {
   // $(".searchBar").empty();
    $("#searchBtn").click( function (){
      var inputValue = $(this).val();
      $(".searchBar").text(value, "<p>");
        console.log("working");
    });
};

function getResponse() {
      var apiKey = "A6GkgtsWRapq-05zuRUZJk3-H3CmXGg6cMVi2sC2KvQ2UuWHsFZFGEJeL_wvBn3ylhB3oPmTY7hOtTq0j05MlJWvmQrxUWGjHtaFLCu_BuvA1fM_RrM6iHfJr8TfWnYx";

      $.ajax({
        type: "POST",
        url: "yelp.com",
        data: data,
        success: success,
        dataType: dataType

      })

            $.each(function(key, value, response) {
                var container = $("<div>");
                container.attr("id");

                var review = value;
                container.append(newImage);

                console.log(response);
                })
            };
      