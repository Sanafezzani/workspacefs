var personne = {
    nom: "alex",
    adresse: "paris",
    age: 25
};
var n = prompt("Donner le nombre de variables à insérer :");
var tab=[];
for(var i=0;i<n;i++){
    var b = prompt("Donner une variable :");
    tab.push(b);
}
function somme(tab){
   var s=0;
   for(var i=0;i<tab.length;i++){
    s=s+tab[i];
    }
    return(s);
}
function moyenne(a,b){
   var s=somme(tab);
   return(s/tab.length);
}
console.log("la somme des valeurs entrées est "+somme(tab));
console.log("la moyenne des valeurs entrées est "+moyenne(tab));
