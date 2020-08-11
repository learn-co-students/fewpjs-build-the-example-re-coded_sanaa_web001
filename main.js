// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector('#modal');
let heart = select(undefined, undefined, 'like');


document.addEventListener('DOMContentLoaded', function(e) {
    modal.classList.add('hidden');

    for (let i = 0; i < heart.length; i++) {
        let heartGlyph = heart[i].querySelector('.like-glyph');
        heart[i].addEventListener('click', function(e) {
            if (heartGlyph.innerText == EMPTY_HEART) {
                mimicServerCall()
                    .then(function(response) {

                    })
                    .then(function(json) {
                        heartGlyph.classList.add('activated-heart');
                        heartGlyph.innerText = FULL_HEART;
                    })
                    .catch(function(e) {
                        modal.classList.remove('hidden');
                        select(undefined, "modal-message").innerText = e.message;
                        setTimeout(() => {
                            modal.classList.add('hidden');
                        }, 5000);
                    });
            } else if (heartGlyph.innerText == FULL_HEART) {

                heartGlyph.classList.remove('activated-heart');
                heartGlyph.innerText = EMPTY_HEART;

            }
        });

    }

});










function select(tag, id, className) {
    if (tag) {
        return document.getElementsByTagName(tag);
    }
    if (id) {
        return document.getElementById(id);
    }
    if (className) {
        return document.getElementsByClassName(className);
    }
    return null;
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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