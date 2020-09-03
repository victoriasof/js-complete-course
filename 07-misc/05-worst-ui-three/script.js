/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    let button1value = document.getElementById("part-one");
    let button2value = document.getElementById("part-two");
    let button3value = document.getElementById("part-three");
    let button4value = document.getElementById("part-four");

    let button1 = document.getElementById("fix-part-one");
    let button2 = document.getElementById("fix-part-two");
    let button3 = document.getElementById("fix-part-three");
    let button4 = document.getElementById("fix-part-four");

    function generate(){
        document.getElementById("target").innerHTML =
            "0" + button1value.value + button2value.value + button3value.value + button4value.value;
        //Display the number (with a leading 0) in the target paragraph.
    }

    button1.onclick = function(){
        let randomnumber1 = parseInt(button1value.dataset.min) + Math.floor(Math.random()*39) ;
        // parseInt() function parses a string argument and returns an integer
        //Attributes can be set and read by using: element.dataset.keyname
        //let randomnumber = Math.floor((Math.random() * length));
        // max 499 - min 460 = 39
        button1value.value = randomnumber1;
        generate();
    }

    button2.onclick = function (){
        let randomnumber2 = Math.floor(Math.random()*parseInt(button2value.dataset.max));
        button2value.value = randomnumber2;
        generate();
    }

    button3.onclick = function(){

        let randomnumber3 = Math.floor(Math.random()*parseInt(button3value.dataset.max));
        button3value.value = randomnumber3;
        generate();
    }

    button4.onclick = function (){

        let randomnumber4 = Math.floor(Math.random()*parseInt(button4value.dataset.max));
        button4value.value = randomnumber4;
        generate();

    }

})();
