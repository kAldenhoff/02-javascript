/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var choice = prompt("Voulez-vous du gâteau ?")

  if(choice.toLowerCase()==="oui"){
    alert("Félicitation, vous avez fait le bon choix");
  }else {
    alert("Allons allons, du gâteau, ça ne se refuse pas !");
  }

})();
