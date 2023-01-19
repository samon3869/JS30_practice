function buttonActive(e) {
    const keyButton = document.querySelector(`.key[data-number='${e.keyCode}']`);
    if (!keyButton) {return;}
    keyButton.classList.add("playing");
}

function removeTransition(e) {
    this.classList.remove("playing");
}

function playAudio(e) {
    const audio = document.querySelector(`audio[data-number="${e.keyCode}"]`);
    if (!audio) {return;}
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener("keydown", buttonActive);
window.addEventListener("keydown", playAudio);
const keys = document.querySelectorAll(".keys .key");
keys.forEach(key => {key.addEventListener("transitionend", removeTransition);})
