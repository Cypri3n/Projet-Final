const canvas = document.querySelector('canvas'),
gomme = document.querySelector('#gomme'),
btn_outils = document.querySelectorAll(".outil");
ctx = canvas.getContext("2d");

let  Dessine = false, épaisseur = 5;

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});


const startDraw = () => {
  Dessine = !Dessine;
  ctx.beginPath();
  ctx.lineWidth = épaisseur;
}

const drawing = (e) => {
  if(!Dessine) return
  ctx.lineTo(e.offsetX,e.offsetY);
  ctx.stroke();
}

gomme.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

btn_outils.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".outil.actif").classList.remove("actif");
    btn.classList.add("actif");
    outil_selectione = btn.id;
    console.log(outil_selectione);
  })
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", startDraw);
canvas.addEventListener("mousemove", drawing);
