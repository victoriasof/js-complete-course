/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// The function window.lib.getComments() is available in the script.
// It must receive an article id as the first parameter,
// as well as a callback as the second parameter.
// When you click on the button, call the getPosts function.
// After a short delay, the callback will be executed with two parameters:
// the first one contains an error (if there is one, if not null),
// the second one a table of the comments of the article.
// For each recovered item, calls the getComments function
// and add the comments obtained in a comments property of the item.
// Displays items in the console (getPosts and getComments functions never return errors).

let run = document.getElementById("run")

run.addEventListener("click", getPostsWithComments)

function getPostsWithComments(){

    window.lib.getPosts(function(error,posts){

        posts.forEach(post =>{
            window.lib.getComments(post.id, function(error, comments){


               // post.comment = comments;

                comments.forEach(comment =>{

                    if (comment.id === post.id){
                        post.comment = comment.comment;
                    }

                })

            });
            console.log(post);
        });

    });
}






