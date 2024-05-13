const canvas = document.querySelector('canvas'),
poubelle = document.querySelector('#poubelle'),
sauvegarder  = document.querySelector("#sauvegarder"),
btns_couleur  = document.querySelector("#size-slider"),
btn_outils = document.querySelectorAll(".outil");
ctx = canvas.getContext("2d");


let  Dessine = false, épaisseur = 5;

const fond_canvas = () => {
  ctx.fillStyle = "#fff"
  ctx.fillRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle = selectedColor;
}

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    fond_canvas();
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

poubelle.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fond_canvas();
});

sauvegarder.addEventListener("click", () => {
   const lien = document.createElement("a");
   lien.download = `Mon Barbapapa.jpg`;
   lien.href  = canvas.toDataURL();
   lien.click();
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

