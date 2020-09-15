// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById("modal").classList.add("hidden");
EMPTY_HEART.addEventListener('click',(e)=>{
  mimicServerCall().then(res=>res.json()).then(data=>data).catch((error) => {
    document.getElementById("modal").className="";
    document.getElementById("modal").innerHTML=error;
    setTimeout(document.getElementById("modal").classList.add("hidden"),5000);
  });
});



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
