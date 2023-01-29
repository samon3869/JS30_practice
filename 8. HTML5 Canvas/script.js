const canvas = document.getElementById("draw");
const ctx = canvas.getContext('2d');
canvas.style.border = "2px solid green";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 0;
ctx.strokeStyle = `hsl(${hue}deg, 50%, 50%)`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
// ctx.globalCompositeOperation = 'multiply';

let [lastPointX, lastPointY] = [0, 0];
let isDrawing = false;
let derivative = 1;

function draw(e) {
    if (!isDrawing) return;
    if (hue == 0) {derivative = 1;}
        else if (hue == 360) {derivative = -1;}
    hue = hue + derivative;
    ctx.strokeStyle = `hsl(${hue}deg, 50%, 50%)`;
    if (e.type == "mousedown") {
        [lastPointX, lastPointY] = [e.offsetX, e.offsetY];
    }
    
    let [pointX, pointY] = [e.offsetX, e.offsetY];
    ctx.beginPath();
    ctx.moveTo(lastPointX, lastPointY);
    ctx.lineTo(pointX, pointY);
    [lastPointX, lastPointY] = [e.offsetX, e.offsetY];
    
    ctx.stroke();
}

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mousedown', draw);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);