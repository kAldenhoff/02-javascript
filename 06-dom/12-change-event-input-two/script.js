/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var input = document.getElementById("pass-one");
  var reg = new RegExp("(?=.*[0-9].*[0-9])[0-9a-zA-Z!@#$%0-9]{8,}");

  input.addEventListener("input", function(){
    document.getElementById('validity').innerHTML = reg.test(input.value) ? "Ok " : "Pas ok";
  })

})();
