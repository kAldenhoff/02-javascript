/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var target = document.getElementById("target");
    var txt = target.innerHTML;
    target.innerHTML="";
    var speedMax = 150;
    var speedMin = 50;
    var i = 0;

    typeWriter();
    var inter;
    
    function typeWriter() {

      if (i < txt.length) {
        target.innerHTML += txt.charAt(i);
        i++;
        speed = Math.floor(Math.random() * (speedMax - speedMin))+speedMin;
        setTimeout(typeWriter, speed);
      }
    }



})();
