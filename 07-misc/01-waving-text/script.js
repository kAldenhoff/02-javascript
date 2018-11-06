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
  target.innerHTML = "";
  var fontSize = ['15px','17px','19px','21px','23px','25px','27px','29px'];
  console.log(words);

  for(var i=0; i<words.length;i++){
    var span = document.createElement('span');
    span.innerHTML = words[i]+" ";
    span.style.fontSize = fontSize[i%fontSize.length];
    target.appendChild(span);
  }
})();
