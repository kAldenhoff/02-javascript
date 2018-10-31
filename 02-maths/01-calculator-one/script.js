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
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        op1 = parseFloat(document.getElementById("op-one").value);
        op2 = parseFloat(document.getElementById("op-two").value);
        result = op1+op2;
        alert("Résultat: "+result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        op1 = parseFloat(document.getElementById("op-one").value);
        op2 = parseFloat(document.getElementById("op-two").value);
        result = op1-op2;
        alert("Résultat: "+result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        op1 = parseFloat(document.getElementById("op-one").value);
        op2 = parseFloat(document.getElementById("op-two").value);
        result= op1*op2;
        alert("Résultat: "+result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        op1 = parseFloat(document.getElementById("op-one").value);
        op2 = parseFloat(document.getElementById("op-two").value);
        result = op1/op2;
        alert("Résultat: "+result);
    });
})();
