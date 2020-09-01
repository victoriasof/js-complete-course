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
    // your code here
    document.getElementById("pass-one").addEventListener("keyup", function(){

        let input = document.getElementById("pass-one").value;
        let validity = document.getElementById("validity");


        if (input.length >= 8 && input.match(/[0-9]{2}/)) {

            validity.innerHTML = "Ok";
        } else {

            validity.innerHTML = "Not ok";
        }

    })

})();
