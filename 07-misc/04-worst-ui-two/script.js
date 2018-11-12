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

    var allButtons = document.querySelectorAll('button');
    var target = document.getElementById('target');

    allButtons.forEach(function(button){
      button.addEventListener('click', function(){
        var indexButton = Array.from(allButtons).indexOf(button);
        var data_max = button.getAttribute('data-max');
        var data_min = button.getAttribute('data-min');

        number =  parseInt(button.innerText)+1;
        button.innerText===data_max ? button.innerText = data_min : button.innerText++;


        if(number<10){
          number = "0"+number;
        }

        if(indexButton===0){
          target.innerText = "+"+number+target.innerText.substring(4,target.innerText.lenght);
        }else{
          target.innerText = target.innerText.substring(0,2*(indexButton+1))+number+target.innerText.substring((indexButton+2)*2,target.innerText.lenght);
        }
      })
    })

})();
