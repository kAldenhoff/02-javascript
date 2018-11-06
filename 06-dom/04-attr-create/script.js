/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  var source = document.getElementById("source")
  var dataImage = source.getAttribute("data-image");
  var img = document.createElement('img');
  img.src= dataImage;
  document.getElementById("target").appendChild(img);
  source.parentNode.removeChild(source);

})();
