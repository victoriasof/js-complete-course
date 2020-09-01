/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let input = document.getElementById("pass-one");
    let counter = document.getElementById("counter");

    let i=1;

   input.addEventListener("keypress", function(){
        // your code here
        if (i<11){
           counter.innerHTML = `${i}/10`    //js text template
           i++
        }
        else {
            input.setAttribute("maxlength", "10");

        }

    })
})();
