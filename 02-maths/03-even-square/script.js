/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        // your code here
        var nombreMin=1;
        var nombreMax=21;
        var result = 0;
        var numbersList = "Numbers: ";
        var squareList = " Square: ";

        var i;
        for(i=nombreMin; i<=nombreMax;i++){
          if(i % 2 === 0){
            result = i *i;
            numbersList = numbersList+i+"   ";
            squareList = squareList + result+" ";
          }
        }
        alert(numbersList+"\r"+squareList);
    });

})();
