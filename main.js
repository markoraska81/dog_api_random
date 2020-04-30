

var btn = document.querySelector('#button');
var photo = document.querySelector('#photo');

btn.addEventListener('click', dogRequest);

function dogRequest() {
    var newRequest = new XMLHttpRequest();

    newRequest.open('GET', 'https://dog.ceo/api/breeds/image/random');

    newRequest.onload = function() {
      var data = JSON.parse(newRequest.responseText).message;
      photo.src = data; 
    }

    newRequest.send();
}
