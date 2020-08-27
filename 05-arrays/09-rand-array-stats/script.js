/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
// your code here
    document.getElementById("run").addEventListener("click",function(){

        let numbers = [];

        for (i = 0; i < 10; i++){
            numbers.push(Math.floor(Math.random() * 100));
        }

        let table = document.querySelectorAll("td");
        console.log(table);
        for (i=0; i<table.length; i++){
            table[i].innerText=numbers[i];
        }

        let min = Math.min(...numbers);
        let max = Math.max(...numbers);
        let sum = numbers.reduce((a, b) => a + b);
        let avg = sum/10;

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = avg;

    })

})();
