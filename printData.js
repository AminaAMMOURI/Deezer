// exo-1 => faire une branch 'get-title'
// Accéder et Lister les titres de chaque albums dans la console du navigateur;
// Afficher cette liste dans votre page HTML (dans la balise 'ul').

//console.log(data[0].title); //afficher premier element du tableau data ne pas oublier l'index de quel tableau : le nom du tableau
//console.log(data[0].id); //nom du tableau, l'element du tableau et le sous element

// data.forEach((titresDuTableau) => {
//   console.log(titresDuTableau.title);
// }); 
//parcourir les element du tableau avec une boucle, avec entre parentheses UNE FONCTION
//parentheses avec des parentheses => et {} on utilise la cle : title
//mettre un argument qu'on choisit entre les parentheses : cet argument équivaut à data[x]

const baliseUl = document.querySelector('ul');
//acceder à la balise ul du html et ecrire dedans 
//créer une variable const (va selectionner une element et n'a pas besoin de changer) et lui donner un nom de notre choix. Puis signe = pour lui donner une valeur, cibler l'élément html : ul. document fait ref au document HTML. ; fin de l'instruction

const listeTitres = () => {
   data.forEach((titresDuTableau) => {
       baliseUl.insertAdjacentHTML('beforeend', `<li>${titresDuTableau.title}</li>`) ;
       //forEach prend TOUJOURS UNE FONCTION COMME ARGUMENT
     // insertAdjacentHTML pour ecrire sur la page html
    // autre façon de concatener : baliseUl.insertAdjacentHTML('beforeend', '<li>' + titresDuTableau.title + '</li>') ;
   }) //concatener : additioner 
}; //la fonction va chercher la cle TITLE dans le tableau. On integre la boucle dans la fonction pour l'executer quand on veut
//on crée une fonction qu'on peut appeler lorsqu'on le souhaite pour ecrire dans ul et les instructions incluses dans elle même : li

listeTitres();
//j'appelle la fonction pour qu'elle s'execute. une fonction a besoin d'être appelée pour s'excuter contrairement à la boucle

//monConteneur.insertAdjacentHTML('beforeend', `<img src="${data[0].cover_medium}">`);
//insertAdjacentHTML prend 2 arguments, le premier est l'emplacement 
//${} pour contenir la source de ce que je veux afficher sur la page html
//pour acceder à un element : nom tableau[son index]

const monConteneur = document.querySelector('.album-list');
const imagesAlbums = () => {
    data.forEach((images) => {
        monConteneur.insertAdjacentHTML('beforeend', `<img src="${images.cover_medium}">`);
    })
}
//l'argument qu'on a choisi "images" équivaut à "data[x]"

imagesAlbums();
//il faut appeler la fonction pour qu'elle execute son contenu