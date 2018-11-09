/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var result="";
    var mod3;
    var mod5;

    for(var i=0;i<=100;i++){
      mod3 = i % 3;
      mod5 = i % 5;

      if(mod3 && mod5){
         result = result+i;
      }else{
        if(!mod3){
          result = result +"fizz";
        }
        if(!mod5){
          result = result + "buzz";
        }
      }
      result = result +" ";
    }

    console.log(result);
})();
