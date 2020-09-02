/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let text = document.getElementById("target").innerHTML
        = "a smooth sea never made a skilled sailor";
    let words = text.split(" ");
    let wave = " ";

    for (let i = 0; i < words.length; i++) {
         wave += "<span>" + words[i] + "</span>";
    }

    document.getElementById("target").innerHTML = wave;

    let letters = document.getElementsByTagName("span");
    let size = [4, 5, 4, 3, 2, 1, 2, 3];

    for (let j=0; j<letters.length; j++){
        letters[j+1].style.fontSize = size[j % size.length] + "0px";
    }
})();
