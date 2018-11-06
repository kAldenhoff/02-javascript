/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var allButtons = document.getElementsByTagName('button');
    var target = document.getElementById('target');
    var sum = 460000000;


    Array.from(allButtons).forEach(function(button){
      button.addEventListener('click', function(){
        var data_max = button.getAttribute('data-max');
        var data_min = button.getAttribute('data-min');

        sum += parseInt(button.innerText);
        target.innerText = "+"+sum;
        button.innerText===data_max ? button.innerText = data_min : button.innerText++;
      })
    })

})();
