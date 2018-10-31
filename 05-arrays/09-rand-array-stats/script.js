/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  document.getElementById('run').addEventListener("click", function(){
    var numbers = [];
    var min;
    var max;
    var sum;
    var avg;

    for(var i=1;i<11;i++){
      numbers.push(Math.floor(Math.random()*100)+1);
      document.getElementById("n-"+i).innerHTML = numbers[i-1];
    }
    document.getElementById("min").innerHTML = Math.min(...numbers);
    document.getElementById("max").innerHTML = Math.max(...numbers);
  })



})();
