/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var target = document.getElementById("target")
  var words = target.innerHTML.split(" ");
  var fontSize = ['13px','17px','21px','25px','21px','17px','13px'];

  target.innerHTML="";

  createSpan();
  setInterval(changeFontSize, 500);

  function createSpan(){
    for(var i=0; i<words.length;i++){
      var span = document.createElement('span');
      span.innerHTML = words[i]+" ";
      span.classList.add("wordsToChange");
      target.appendChild(span);
    }
  }

  function changeFontSize(){
    var allSpan = document.querySelectorAll('span.wordsToChange');
    var temp = fontSize[0];

    fontSize.shift();
    fontSize.push(temp);

    for(var i=0; i<words.length;i++){
      allSpan[i].style.fontSize = fontSize[i%fontSize.length];
    }
  }
})();
