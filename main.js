// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector('#modal');
let likes = document.etElementsByClassName(like);
document.addEventListener('DOMContentLoaded', function (e) {
    modal.classList.add('hidden');
    for (let i = 0; i < heart.length; i++) {
        let heart = likes[i].querySelector('.like-glyph');
        likes[i].addEventListener('click', function (e) {
            if (heartGlyph.innerText == EMPTY_HEART) {
                mimicServerCall()
                    .then(function (response) { })
                    .then(function (json) {
                        heart.classList.add('activated-heart');
                        heart.innerText = FULL_HEART;
                    })
                    .catch(function (e) {
                        modal.classList.remove('hidden');
                        document.getElementById("modal-message").innerText = e.message;
                        setTimeout(() => {
                            modal.classList.add('hidden');
                        }, 5000);
                    });
            } else if (heart.innerText == FULL_HEART) {
                heart.classList.remove('activated-heart');
                heart.innerText = EMPTY_HEART;

            }
        });

    }

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
