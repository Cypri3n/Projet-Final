@font-face {
  font-family: 'Magmit';
  src: url('../MAGIMT__.TTF') format('truetype');
}


body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: rgb(210, 230, 241);
}

#tableau {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px; 
  width: 700px;
  margin: auto; 
  background-color: #ffffff;
  border-width: 10px;
  border-radius: 10px;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.5);
}



#barreoutils {
  background-color: #a0a0a0;
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100px;
  gap: 1%;
}

img{
  background-color: #bdbdbd;
  width: 70px;
  height: 70px;
  padding: 5px;
}

img:hover{
  background-color: #c5c5c5;
  cursor: pointer;
}

h1{
  font-size: 5em;
  font-family: 'Magmit';
  color: hotpink ;
}

#retour {  
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  background : no-repeat;
  height: 83px;   
  width: 83px;
  background-image: url('https://www.barbapapa.com/wp-content/themes/barbapapa-from-twentytwelve/images/family.gif');    
}


#retour:hover {
  background-image: url('https://www.barbapapa.com/wp-content/themes/barbapapa-from-twentytwelve/images/family_rollover.gif');
}

canvas {  
  width: 100%;
  height: 100%;
}


.outil.actif {
  background-color: #e0e0e0;
}

button  {
  width: 100%;
  color: #000000;
  font-size: 1.5vw;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  width:  10%;
  height: 50%;
}

.couleurs{
  list-style-type: none;
  display : flex;
  justify-content: space-between;
  gap: 10px;
}

.couleur{
  height: 30px;
  width:  30px;
  background: red;
  border-radius: 25%;
  margin-top: 3px;
}

.couleur:nth-child(1){
  background-color: rgb(255, 255, 255);
}
.couleur:nth-child(2){
  background-color: rgb(0, 0, 0);
}
.couleur:nth-child(3){
  background-color: red;
}
.couleur:nth-child(4){
  background-color: green;
}
.couleur:nth-child(5){
  background-color: blue;
}


#couleur_perso {
  opacity: 0;
  cursor: pointer;
}

.couleur.actif {
  
}
