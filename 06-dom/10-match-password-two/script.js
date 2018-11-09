/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var passOne;
  var passTwo;

  document.getElementById('run').addEventListener('click', function(){

    /* Version "normale"
    passOne = document.getElementById('pass-one');
    passTwo = document.getElementById('pass-two');

    if(passOne.value !== passTwo.value){
      passOne.classList.add("error");
      passTwo.classList.add("error");
    }else{
      passOne.classList.remove("error");
      passTwo.classList.add("error");
  }
    */

    //Version 1 ligne
    var inputs = document.querySelectorAll("input");
    Array.from(inputs).every(x => x.value === inputs[0].value) ? inputs.forEach(input => input.classList.remove('error')) : inputs.forEach(input => input.classList.add("error"));

  })

})();
