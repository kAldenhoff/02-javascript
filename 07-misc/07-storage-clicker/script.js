/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

document.getElementById("target").innerText= localStorage.getItem("counter");

    document.getElementById("increment").addEventListener('click', function(){
      document.getElementById("target").innerText++;
      localStorage.setItem("counter",document.getElementById("target").innerText)
    })

})();
