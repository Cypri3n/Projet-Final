const canvas = document.querySelector('canvas'),
poubelle = document.querySelector('#poubelle'),
sauvegarder  = document.querySelector("#sauvegarder"),
curseur_taille = document.querySelector("#curseur"),
btns_couleur = document.querySelectorAll(".couleurs .couleur"),
btn_outils = document.querySelectorAll(".outil");
ctx = canvas.getContext("2d");


let  Dessine = false, 
couleur_actuelle = "#000",
épaisseur = 5;

const fond_canvas = () => {
  ctx.fillStyle = "#fff"
  ctx.fillRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle = couleur_actuelle;
}

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    fond_canvas();
    ctx.strokeStyle = couleur_actuelle;
    ctx.fillStyle = couleur_actuelle;
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

curseur_taille.addEventListener("change", () =>  épaisseur = curseur_taille.value);

btns_couleur .forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".couleur.actif").classList.remove("actif");
    btn.classList.add("actif");
    couleur_actuelle = window.getComputedStyle(btn).getPropertyValue("background");
  });
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", startDraw);
canvas.addEventListener("mousemove", drawing);

