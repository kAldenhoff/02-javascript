/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

var age;
var gender;
var city;
var confirmMessage = "Etes vous d'accord avec ces informations ?\r";

do {
  age = prompt("Quel est votre âge ?");
  gender = prompt("Quel est votre sexe ?");
  city = prompt("Quel est votre ville ?");
  confirmMessage = confirmMessage + "Age: "+age+"\r Sexe: "+gender+"\r Ville: "+city;
}while(!confirm(confirmMessage));

})();
