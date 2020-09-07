/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    //The window.lib.getPosts() function is available in the script.
    // It must receive a callback parameter.

    // After a short delay, the callback will be executed with two parameters:
    // the first contains an error (if there is one, otherwise null),
    // the second an array of articles.

    // At the click of the button, call the getPosts function and
    // display the items obtained in the console (the getPosts function never returns an error).

    document.getElementById("run").addEventListener("click", ()=>{

        window.lib.getPosts(function (error, array){

            if(error){
                console.log("error!");
            }
            else {
                console.log(array);
            }
        });
    });

})();
