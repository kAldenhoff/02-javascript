/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  document.getElementById('run').addEventListener("click", function(){
    var day;
    var month;
    var year;
    var today = new Date();
    var age = 0;

     day = document.getElementById("dob-day").value;
     month = document.getElementById("dob-month").value;
     year =  document.getElementById("dob-year").value;

     console.log(today.getDate());
     age = today.getFullYear() - year;

     if(month>today.getMonth()+1){
       age--;
     }else if (month === today.getMonth()+1 && today.getDate()>day){
         age--;
     }
     alert("Age:"+age);
  });

})();
