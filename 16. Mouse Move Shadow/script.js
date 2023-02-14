const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
    let { offsetX: x, offsetY: y} = e;
    const walk = 100;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    const xWalk = ((x / hero.offsetWidth) - 0.5) * walk;
    const yWalk = ((y / hero.offsetHeight) - 0.5) * walk;

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk}px ${-yWalk}px 0 rgba(0,255,255,0.7),
        ${-xWalk}px ${yWalk}px 0 rgba(0,255,0,0.7),
        ${-xWalk}px ${-yWalk}px 0 rgba(0,0,255,0.7)
    `;
}

hero.addEventListener("mousemove", shadow);