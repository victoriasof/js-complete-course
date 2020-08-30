/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function info() {
    let name = prompt("What is your name?");
    let gender = prompt("Are you a boy or a girl?");
    let hometown = prompt("Where are you from?");

    alert("name: "+ name + ", gender: " + gender + ", hometown: " + hometown);

    if(confirm("Please confirm")){
        //empty if statement
    }
    else{
        info()
    }

})();
