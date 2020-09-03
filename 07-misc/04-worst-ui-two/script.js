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

        document.querySelectorAll(".actions button").forEach(button => {

            let count = button.dataset.min;

            button.addEventListener("click",() => {
                count < button.dataset.max ? count++ : count = button.dataset.min;

                button.innerHTML = count.toString().padStart(2, '0');

                let target = document.getElementById("target");
                target.innerHTML = "0";

                document.querySelectorAll(".actions button").forEach(button => {
                    target.innerHTML += button.innerHTML;

                })

            })
    })

})();
