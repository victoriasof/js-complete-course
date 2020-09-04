/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //let X = random number
    let X = Math.floor(Math.random()*100)+1;
    //let Y = input counter
    let Y = []

    alert(X);
    let guess;

    do {

        guess = Number(prompt("guess number X"));

        Y.push(guess);

        if (X > guess) {
            alert("higher");
        }

        else if (X < guess) {
            alert("lower");
        }
    }
    while(guess !== X);

    alert("that's it! it took you " + (Y.length) + " guesses");

})();
