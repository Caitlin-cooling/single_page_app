document.getElementById("button").addEventListener("click", handler);

function handler(e) {
  e.target.removeEventListener(e.type, arguments.callee);
  fetch('https://async-workshops-api.herokuapp.com/people')
    .then(function(response) {
      return response.json();
    })
    .then(function(names){
      document.getElementById("names").innerHTML = JSON.stringify(names);
      console.log(JSON.stringify(names));
    });
}
