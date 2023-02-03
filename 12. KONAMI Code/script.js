const konamiCode = 'coding king'

const pressed = [];
window.addEventListener('keypress', keyPress);

function keyPress(e) {
    pressed.push(e.key);
    pressed.splice(-konamiCode.length - 1, pressed.length - konamiCode.length);
    console.log(pressed);

    if (pressed.join('').includes(konamiCode)) {
        cornify_add();
    }
}
