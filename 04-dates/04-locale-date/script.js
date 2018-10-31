/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    var todayDate;
    var date = new Date();
    var dayArray = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    var monthArray = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];

    todayDate = dayArray[date.getDay()] + " " + date.getDate() + " " + monthArray[date.getMonth()] + " " + date.getFullYear()+", "+ date.getHours()+"h"+date.getMinutes();

    document.getElementById("target").innerHTML = todayDate;
})();
