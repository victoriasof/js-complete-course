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
    var name = prompt ("What is your name?");
    var gender = prompt ("Are you a boy or a girl?");
    var hometown = prompt ("Where are you from?");
    alert ("name: " + name + ", gender: " +gender + ", home town: " +hometown);

    // your code here

    if (confirm("Please confirm")) {

    }
    else {
        info()
    }


})();
