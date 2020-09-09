/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//When you click on the button, use the fetch function,
// retrieve the list of X-Men and display it in the tag whose id is "target".
// Use the template tag to reproduce an html structure for each hero.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", ()=>{

        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(data => showAllData(data))

            function showAllData(heroes){

                heroes.forEach(hero =>{

                    let templateNode = document.getElementById("tpl-hero").content.cloneNode(true);

                    templateNode.querySelector(".name").innerText = hero.name;
                    templateNode.querySelector(".alter-ego").innerText = hero.alterEgo;
                    templateNode.querySelector(".powers").innerText= hero.abilities;

                    document.getElementById("target").appendChild(templateNode);

                })

            }
    })
})();
