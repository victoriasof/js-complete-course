/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
The function window.lib.getPersons() is available in the script.
It returns a Promise that will be resolved, after a short delay, with a table of people.
When you click on the button, call the getPersons function
and display the result obtained in the console.
Warning: the Promise returned by the getPersons function has more or less a
half chance of being rejected with an error. If so, use console.error() to display it).
 */

(() => {

    /*
    let run = document.getElementById('run');

    run.addEventListener('click', function () {

        let promise = window.lib.getPersons();

        promise.then((articles)=>{

            console.log(articles);
        })

        promise.catch((error)=>{

            console.error(error);
        })

    })

     */

   document.getElementById("run").addEventListener("click", ()=>{

       let persons = (resolve) => console.log(resolve);
       let personsError = (reject) => console.error(reject);

       window.lib.getPersons().then(persons).catch(personsError);


   })

})();
