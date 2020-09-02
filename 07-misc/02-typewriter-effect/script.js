/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = "a smooth sea never made a skilled sailor";

    document.getElementById("target").innerHTML = " ";

    let i = 0;

    function typeWriter() {
        if (i < target.length) {
            document.getElementById("target").innerHTML += target.charAt(i);
            i++;
            setTimeout(typeWriter, Math.floor(Math.random()*500));
        }
    }
    typeWriter();

})();
