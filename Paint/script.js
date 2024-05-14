
// importe certains éléments HTML/CSS vers le JS
const canvas = document.querySelector('canvas'),
poubelle = document.querySelector('#poubelle'),
sauvegarder  = document.querySelector("#sauvegarder"),
curseur_taille = document.querySelector("#curseur"),
btns_couleur = document.querySelectorAll(".couleurs .couleur"),
couleur_perso = document.querySelector("#couleur_perso"),
btn_outils = document.querySelectorAll(".outil");
ctx = canvas.getContext("2d");

//définiton de variables

let prevMouseX, prevMouseY, snapshot
Dessine = false, 
outil_selectione = "pinceau",
couleur_actuelle = "#000",
épaisseur = 5;

//définit les caractéristiques du contexte 2D du canvas

const fond_canvas = () => {
  ctx.fillStyle = "#fff"
  ctx.fillRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle = couleur_actuelle;
}


 // initialise les caractéristiques du canvas au chargement

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    fond_canvas();

});

// Définit les conditions propices au début du dessin

const startDraw = (e) => {
  Dessine = !Dessine;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;
  snapshot = ctx.getImageData(0,0,canvas.width,canvas.height);
  
  ctx.beginPath();
  ctx.lineWidth = épaisseur;
  ctx.strokeStyle = couleur_actuelle;
  ctx.fillStyle = couleur_actuelle;
}

//Défini le fait de dessiner un rectangle, tant que le clic droit est enfoncé
const dessinerRect = (e) => {
  ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}


//regroupe tout ce qui concerne le dessin
const drawing = (e) => {
  if(!Dessine) return 
  ctx.putImageData(snapshot, 0, 0);


  // vérifie le bouton actuellement cliqué
  if(outil_selectione === "pinceau" || outil_selectione === "gomme") {
    ctx.strokeStyle = outil_selectione === "gomme" ? "#fff" : couleur_actuelle; // initialise la couleure een fonction de la gomme ou du crayon
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
  } else if (outil_selectione === "rectangle"){
      dessinerRect(e);
  }

}


//Défini l'action du bouton poubelle, qui permet de supprimer tout le dessin
poubelle.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fond_canvas();
});


//Permet de télécharger le dessin réalisé avec le nom "Mon Barbapapa" via le bouton enregistrer
sauvegarder.addEventListener("click", () => {
   const lien = document.createElement("a");
   lien.download = 'Mon Barbapapa.jpg';
   lien.href  = canvas.toDataURL();
   lien.click();
});


// pour chaque bouton le définit en tant que actif s'il est cliqué et définit une variable contenant l'id de l'outil sélectioné
btn_outils.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".outil.actif").classList.remove("actif");
    btn.classList.add("actif");
    outil_selectione = btn.id;
    console.log(outil_selectione);
  })
});


//Défini que le curseur servant à modifier l'épaisseur du trait
curseur_taille.addEventListener("change", () =>  épaisseur = curseur_taille.value);


//Définit le bouton de couleure cliqué et définit sa valeure dans la variable couleure_actuelle  
btns_couleur.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".couleur.actif").classList.remove("actif");
    btn.classList.add("actif");
    couleur_actuelle = window.getComputedStyle(btn).getPropertyValue("background-color");
    console.log(couleur_actuelle);

  });
});

// Affiche le bouton de couleure personnalisé de la couleur sélectionnée
couleur_perso.addEventListener('change', () => {
  couleur_perso.parentElement.style.background = couleur_perso.value;
  couleur_perso.parentElement.click();
})


// Détecte le clic de la souris sur le canvas et commence/arrete de dessiner
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", startDraw);
canvas.addEventListener("mousemove", drawing);
