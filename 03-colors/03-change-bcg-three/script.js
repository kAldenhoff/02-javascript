/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  document.getElementById('run').addEventListener("click", function(){
    var rgb1 = Math.floor((Math.random()*255)+1);
    var rgb2 = Math.floor((Math.random()*255)+1);
    var rgb3 = Math.floor((Math.random()*255)+1);

    document.body.style.backgroundColor = "rgb("+rgb1+", "+rgb2+", "+rgb3+")";
  });

})();
