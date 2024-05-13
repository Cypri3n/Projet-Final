const canvas = document.querySelector('canvas');
ctx = canvas.getContext("2d");
const gomme = document.querySelector('.gomme')

let  isDrawing = true;



window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const drawing = (e) => {
  if(!isDrawing) return
  ctx.lineTo(e.offsetX,e.offsetY);
  ctx.stroke();
}

gomme.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mousemove", drawing);
