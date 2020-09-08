/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
articles received via the window.lib.getPosts function included an id property.
The function window.lib.getComments() is available in the script.

It must receive an article id as a parameter, and returns a Promise that will be resolved,
after a short delay, with the article's comments.

When you click on the button, call the getPosts function.
For each recovered item, calls the getComments function and adds the comments obtained
in a comments property of the item.

Displays items in the console (getPosts and getComments functions will always be solved without errors).

 */

(() => {
    // your code here
    let run = document.getElementById("run")

    run.addEventListener("click", getPostsWithComments)

//exersize 4

    function handleSuccess(resolve) {
        console.log(resolve);
    }

    function handleFailure(reject) {
        console.error(reject);
    }

    window.lib.getPosts().then(handleSuccess, handleFailure);

//exercise 2
    function getPostsWithComments(){

        window.lib.getPosts(function(error,posts){

            posts.forEach(post =>{
                window.lib.getComments(post.id, function(error, comments){

                    post.comment = comments;

                });
                console.log(post);
            });

        });
    }

})();
