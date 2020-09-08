/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
The function window.lib.getPosts() is available in the script.
It returns a Promise that will be resolved, after a short delay, with a list of articles.
When you click on the button, call the getPosts function
and display the items obtained in the console
(the getPosts function will always be resolved without error).
Note: for this exercise, use the async/await syntax.
 */

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",async()=>{

    await window.lib.getPosts().then(console.log);

    })

})();
