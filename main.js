// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
window.addEventListener("DOMContentLoaded",function(){
  // alert("hello");
  //  document.getElementById("modal").classList.add("hidden");
});

var glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

var colorStates = {
  "red" : "",
  "": "red"
};

var articleHearts = document.querySelectorAll(".like");


function likeHandler(e) {
  var heart = e.target;
  mimicServerCall()
    .then(function(msg){
      console.log(msg);
        // alert(heart.innerText)
      
        if(heart.innerText.split(" ")[1] == EMPTY_HEART)
       heart.innerText = "Unlike! "+ glyphStates[heart.innerText.split(" ")[1]];
       else
       heart.innerText = "Like! "+ glyphStates[heart.innerText.split(" ")[1]];
     
       heart.style.color = colorStates[heart.style.color];
       
    })
    .catch(function(errorMsg) {
      alert(errorMsg);
      document.getElementById("modal").classList.remove("hidden");
    });
}

for (var glyph of articleHearts) {
  glyph.addEventListener("click", likeHandler);
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
