/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var chance = 10;
    var number = Math.floor(Math.random()*100);
    var message;
    var index = 1;
    console.log(number);
    do{

      var userNumber =  prompt("Quel est votre chiffre ?");
      if(userNumber-number===0){
        message = "Bravo, vous avez trouvé le nombre en "+index+" essais";
      }else if(userNumber > number){
        message = "Plus petit";
      }else{
        message = "Plus grand";
      }
      chance--;
      alert(message+"\r Nombre d'essais: "+chance);
      index++;

    }while(userNumber-number!==0 && chance !=0);

    if(chance===0){
      alert("Le nombre recherché était : "+number);
    }
})();
