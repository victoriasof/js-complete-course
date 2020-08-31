/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    function createTable(){

        let target = document.getElementById("target");
        let table = document.createElement("table");

        for (let i=0; i<10; i++){
            let tr = document.createElement("tr");

            for (let j=0; j<10; j++){
                let td = document.createElement("td");

                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        target.appendChild(table);
    }
    createTable();

    //SICCO EXPLAINED HOW TO ACCESS CELLS IN TABLE AND INSERT CON

    let maketable = document.getElementsByTagName("table");
    let rows = maketable[0].childNodes;

    //console.log(maketable);
    //console.log(rows);

    //let firstrow = rows[0];
    //console.log(firstrow);

    //let cells = firstrow.childNodes;
    //let firstcell = cells[0];
    //console.log(cells);
    //console.log(firstcell);

    //firstcell.innerHTML = "djfhsdjk";
    //cells[1].innerHTML = "jfjkdsd";

    //rows[9].childNodes[9].innerHTML ="sdjfsj";

    for (let x=1; x<11; x++){
        for (let y=1; y<11; y++){
            // += (x*y) + " ";
            rows[x-1].childNodes[y-1].innerHTML = x*y;
        }
    }

})();
