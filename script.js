document.getElementById("button").addEventListener("click", apiRequest);

function apiRequest(e) {
  fetch('https://async-workshops-api.herokuapp.com/peoplessss')
  .then(function(response) {
    return response.json();
  })
  .then(function(names){
    console.log("names", names)
    users = JSON.stringify(names)
    console.log("users", users)
    document.getElementById("names").innerHTML = users;
  })
  .catch(function(error) {
    console.error("Error", error)
  });
}
