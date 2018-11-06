/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var allButtons = document.getElementsByTagName('button');
  var target = document.getElementById('target');
  var timerList = [0,0,0,0];


  Array.from(allButtons).forEach(function(button){
    button.addEventListener('click', function(){
      
      var indexButton = Array.from(allButtons).indexOf(button);
      var input = document.getElementById(button.id.substring(4,button.id.length));
      var max = input.getAttribute('data-max');
      var min = input.getAttribute('data-min');
      var timer = timerList[indexButton];

      if(timer>0){
        stopIncrement();
        timerList[indexButton] = 0;
      }else{
        timerList[indexButton] = setInterval(incrementInput, 500);
      }

      function incrementInput(){
        input.value < max ? input.value++ : input.value = min;
      }

      function stopIncrement(){
        clearInterval(timer);
        if(input.value.length===1){
          input.value = "0"+input.value;
        }

        if(indexButton===0){
          target.innerText = "+"+input.value+target.innerText.substring(4,target.innerText.lenght);
        }else{
          target.innerText = target.innerText.substring(0,2*(indexButton+1))+input.value+target.innerText.substring((indexButton+2)*2,target.innerText.lenght);
        }
      }
    })
  })

})();
