/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        var msg="";

        for (var x=1; x<=21; x++) {
            var square = x * x;
            msg = msg + square + "\n"
    }

    alert(msg);

    });

})();
