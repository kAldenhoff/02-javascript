/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElememntById("element-id").value
    var op1 , op2, result = 0;

    document.querySelectorAll('button').forEach(function(button){
      button.addEventListener("click",function(){
        op1 = parseFloat(document.getElementById("op-one").value);
        op2 = parseFloat(document.getElementById("op-two").value);

        switch (button.id) {
          case "addition":
            result = op1+op2;
            break;
          case "substraction":
            resuslt = op1-op2;
            break;
          case 'multiplication':
            result = op1*op2;
            break;
          case 'division':
            result = op1/op2;
            break;
        }
        alert("Résultat: "+result);
      })
    })
})();
