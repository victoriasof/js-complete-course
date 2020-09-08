/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*The function window.lib.getPosts() is available in the script.
It returns a Promise that will be resolved, after a short delay, with a list of articles.
When you click on the button, call the getPosts function and display the items obtained in the console
(the getPosts function will always be resolved without error).
*/


// your code here

(() => {
    let run = document.getElementById('run');

    run.addEventListener('click', function () {

        function handleSuccess(resolve) {
            console.log(resolve);
        }

        function handleFailure(reject) {
            console.error(reject);
        }

        window.lib.getPosts().then(handleSuccess, handleFailure);
    })

})();

