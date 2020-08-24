/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    // to get the value of an input: document.getElementById("element-id").value
    var one = document.getElementById("op-one").value;
    var two = document.getElementById("op-two").value;

    var performOperation = function(operation) {
        // perform the operation
        var symbol = document.getElementById(operation).id;
        switch (operation){
            case "addition":
                var addition = parseInt(one) + parseInt(two);
                alert(addition);
                break;
            case "subtraction":
                var subtraction = parseInt(one) - parseInt(two);
                alert(subtraction);
                break;
            case "multiplication":
                var multiplication = parseInt(one) * parseInt(two);
                alert(multiplication);
                break;
            case "division":
                var division = parseInt(one) / parseInt(two);
                alert(division);
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();


