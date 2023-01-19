function buttonActive(e) {
    const keyButton = document.querySelector(`.key[data-number='${e.keyCode}']`);
    keyButton.classList.add("playing");
}

function removeTransition(e) {
    this.classList.remove("playing");
}

window.addEventListener("keydown", buttonActive);
const keys = document.querySelectorAll(".keys .key");
keys.forEach(key => {key.addEventListener("transitionend", removeTransition);})
