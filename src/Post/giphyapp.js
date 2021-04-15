

function handleClick() {
    var inputValue = document.querySelector(".giphyQuery").value;
    var userInput = getUserInput();
    searchGiphy(userInput);
  };
  
   function giphyQuery(data) {
      if (data.which === 13) {
        var userInput = getUserInput();
        searchGiphy(userInput);
      }
    };
  
  function getUserInput() {
    var inputValue = document.querySelector(".giphyQuery").value;
  
    return inputValue;
  }
  
  function searchGiphy(searchQuery) {
    var url =
      "https://api.giphy.com/v1/gifs/search?api_key=UhFUfdL0oZHHh20DVt0ztFH6GbBYnZov=" + searchQuery;
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();
  
    GiphyAJAXCall.addEventListener("load", function (data) {
      var actualData = data.target.response;
      pushToDOM(actualData);
      console.log(actualData);
    });
  }
  
  function pushToDOM(response) {
    // turn response into real javascript object
    response = JSON.parse(response);
    // drill down to the data array
    var images = response.data;
  
    // find the container to hold this stuff in DOM
    var container = document.querySelector(".giphy-container");
    // clear it of old content since this function will be used on every search
    // we want to reset the div
    container.innerHTML = "";
  
    // loop through data array and add IMG html
    images.forEach(function (image) {
      // find img src
      var src = image.images.fixed_height.url;
  
      // concatenate a new IMG tag
      container.innerHTML += "<img src='" + src + "' class='container-image' />";
    });
  }