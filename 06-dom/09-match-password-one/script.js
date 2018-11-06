/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
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
      passOne = document.getElementById('pass-one');
      passTwo = document.getElementById('pass-two');

      document.getElementsByTagName('input')[0].style.borderColor = passOne.value === passTwo.value ? "silver" : "red";
      document.getElementsByTagName('input')[1].style.borderColor = passOne.value === passTwo.value ? "silver" : "red";
    })

})();
