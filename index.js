// Consignes : 1 - Créer un événément au scroll

//2 -  Cacher la navbar si l'utilisateur commence à descendre et la sortir quand il remonte

//3 -  Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// 4 - Connaitre niveau de scroll (window.scrollY)

// -  Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu
let dernierScrollyConnu = window.scrollY; //ici le scrollY = 0 car de base la "top" de navbar = 0.

//  - Connaitre niveau de scroll (window.scrollY):
window.addEventListener("scroll", () => {
  console.log(scrollY);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > dernierScrollyConnu) {
    //ça veut dure qu'on descend et qu'on veut cacher la navbar
    navbar.style.top = "-60px";
    dernierScrollyConnu = window.scrollY; // Signifie à cet instant que dernierScrollyConnu stock la valeur du scroll à l'endroit où se trouve l'user actuellement.
  } else if (window.scrollY < dernierScrollyConnu) {
    navbar.style.top = "0px";
    dernierScrollyConnu = window.scrollY;
  }
});

/*Explications: 
 - window.scrollY = 0 de base
 - Si lorsque l'user scroll la valeur du scrollY > dernierScrollyConnu donc la derniere valeur de scroll stockée de "0", alr ça veut dire qu'on descend et que la nav doit être cachée à -60px du top 
 - Ensuite on indique que l'on stock dans dernerScrollyConnu la position actuelle de scrollY où se trouve l'user puis..
 - Si lorsque l'user scroll de nouveau la valeur de scrollY < sa derniere position enregistrée dans dernierScrollyConnu alors ça veut dire qu'on se rapproche du top et qu'on remonte donc on veut revoir la navbar visible à "Opx" du top. 
 - Enfin on stock à nouveau la valeur actuelle de scrollY dans la variable pour que la boucle puisse se jouer à l'infini*/

//Fonctionne aussi :
// let dernerScrollyConnu = 0;

// window.addEventListener("scroll", () => {
//   if (window.scrollY < dernerScrollyConnu) {
//     navbar.style.top = "0";
//   } else {
//     navbar.style.top = "-60px";
//   }
//   dernerScrollyConnu = window.scrollY;
// });
