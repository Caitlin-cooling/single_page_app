document.getElementById("button").addEventListener("click", apiRequest);

function apiRequest(e) {
  fetch('https://async-workshops-api.herokuapp.com/people')
  .then(function(response) {
    return response.json();
  })
  .then(function(names){
    users = JSON.stringify(names)
    document.getElementById("names").innerHTML = users;
  });
}
