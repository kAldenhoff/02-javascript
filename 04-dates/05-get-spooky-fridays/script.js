/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener("click", function(){
      var year = document.getElementById("year").value;
      var date;
      var months="";
      var monthArray = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];

      for(var i=0;i<=11;i++){
        date = new Date(year,i,13,8,0,0);
        if(date.getDay()===5){ 
          months = months+monthArray[i] +" ";
        }
      }
      alert(months);
    });

})();
