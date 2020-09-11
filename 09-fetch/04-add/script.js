/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
When you click on the button, retrieve the values of the form and create the new hero in the API.
Each field must be filled in (it is up to you to manage).
Display the result of all your heroes in the console.
Caution: powers must be stored in the same format as the previous heroes!
 */

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", ()=>{

        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(data => addData(data))
            .catch(err => console.error(err));

        function addData(heroes){

            let name = document.getElementById("hero-name").value;
            let alterEgo = document.getElementById("hero-alter-ego").value;
            let powers = document.getElementById("hero-powers").value;

            let idCounter = heroes.length +1;
            let heroPowers = powers.split(',');

            let newHero = {id: idCounter, name: name, alterEgo: alterEgo, abilities: heroPowers};

            heroes.push(newHero);
            console.log(heroes);

        }

    })

})();
