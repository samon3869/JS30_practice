const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const centerX = text.offsetLeft + text.offsetWidth / 2;
const centerY = text.offsetTop + text.offsetHeight / 2;

function shadow(e) {
    let { offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;

        x = x - centerX;
        y = y - centerY;
    }



    text.style.textShadow = `
        ${x}px ${y}px 0 rgba(255,0,255,0.7),
        ${x}px ${-y}px 0 rgba(0,255,255,0.7),
        ${-x}px ${y}px 0 rgba(0,255,0,0.7),
        ${-x}px ${-y}px 0 rgba(0,0,255,0.7)
    `;
}

window.addEventListener("mousemove", shadow);