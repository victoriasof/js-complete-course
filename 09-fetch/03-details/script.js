/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//When you click on the button, get the id from the form,
// then get the corresponding X-Men from the API and display it in the tag whose id is "target".
// Use the tag template to reproduce a suitable html structure.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(data => showData(data))
            .catch (err => console.error(err));

        function showData(heroes) {

            let heroId = Number(document.getElementById("hero-id").value);

            heroes.forEach(hero => {

                if (hero.id === heroId) {

                    let template = document.getElementById("tpl-hero").content.cloneNode(true);

                    template.querySelector(".name").innerHTML = hero.name;
                    template.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                    template.querySelector(".powers").innerHTML = hero.abilities;

                    let target = document.getElementById("target");

                    target.innerHTML = "";
                    target.appendChild(template)
                }
            })

        }

    })
})();
