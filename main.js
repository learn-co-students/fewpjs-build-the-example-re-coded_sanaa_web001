// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const errorMessage = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
errorMessage.classList.add("hidden");

const likes = document.querySelectorAll(".like");
likes.forEach((like) => {
  like.addEventListener("click", () => {
    const likeGlyph = like.childNodes[1];

    likeGlyph.classList.toggle("activated-heart");
    likeGlyph.innerText = FULL_HEART;
    console.log(likeGlyph);

    // like.classList.toggle(".activated-heart")
    mimicServerCall();

  });
});

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        // reject("Random server error. Try again.");
        errorMessage.classList.remove("hidden");
        modalMessage.innerText = "Random server error. Try again.";
      } else {
        // resolve("Pretend remote server notified of action!");
        errorMessage.classList.add("hidden");
      }
    }, 300);
  });
}
