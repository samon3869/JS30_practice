const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    hourHand.style.transform = `rotate(${hours/12*360+90}deg)`;
    const minutes = now.getMinutes();
    minuteHand.style.transform = `rotate(${minutes/60*360+90}deg)`;
    const seconds = now.getSeconds();
    secondHand.style.transform = `rotate(${seconds/60*360+90}deg)`;
}

setInterval(getTime, 1000);

getTime();