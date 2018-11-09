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
    var color=[];

    for(var i=0;i<3;i++){
      color.push(Math.floor((Math.random()*255)+1));
    }

    document.documentElement.style.backgroundColor = "rgb("+color[0]+", "+color[1]+", "+color[2]+")";
  });

})();
