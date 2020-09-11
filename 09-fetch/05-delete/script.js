/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
When you click on the button, get the id from the form,
then delete the corresponding X-Men in the API and
display the result of your query in the console.
 */

(() => {
    // your code here

    let heroesArr= [];
    let inputElement = document.getElementById("hero-id");
    console.log(inputElement);

    document.getElementById("run").addEventListener("click", () => {

        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(data => {
                // const id = +inputElement.value;
                const id = Number(inputElement.value); // gets and converts the input value (default is string) to number
                const indexToRemove = data.findIndex(hero => hero.id === id); // finds the index of the object that has the same id as the input value
                let newArr = [...data]; // copies all the values of the data array to the new variable "newArr"
                delete newArr[indexToRemove]; // deletes an array item by its index
                console.log(newArr);
            })

            .catch(err => console.error(err));

    })

})();
