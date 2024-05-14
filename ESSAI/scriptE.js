const canvas = document.querySelector('canvas'),
poubelle = document.querySelector('#poubelle'),
sauvegarder  = document.querySelector("#sauvegarder"),
curseur_taille = document.querySelector("#curseur"),
btns_couleur = document.querySelectorAll(".couleurs .couleur"),
couleur_perso = document.querySelector("#couleur_perso"),
btn_outils = document.querySelectorAll(".outil");
ctx = canvas.getContext("2d");


let  Dessine = false, 
outil_selectione = "pinceau",
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

});


const startDraw = () => {
  Dessine = !Dessine;
  ctx.beginPath();
  ctx.lineWidth = épaisseur;
  ctx.strokeStyle = couleur_actuelle;
  ctx.fillStyle = couleur_actuelle;
}

const drawing = (e) => {
  if(!Dessine) return

  if(outil_selectione === "pinceau" || outil_selectione === "gomme") {
    ctx.strokeStyle = outil_selectione === "gomme" ? "#fff" : couleur_actuelle;
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
  }

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
    console.log(window.getComputedStyle(btn).getPropertyValue("background"));
  });
});

couleur_perso.addEventListener('change', () => {
  couleur_perso.parentElement.style.background = couleur_perso.value;
  couleur_perso.parentElement.click();
})

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", startDraw);
canvas.addEventListener("mousemove", drawing);
