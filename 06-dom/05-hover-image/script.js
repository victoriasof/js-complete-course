/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // When hovering over the image, change its source attribute
    // to the value specified in the "data-hover" attribute

    document.querySelector("img").addEventListener("mouseover", function(){

        this.src = "../../_shared/img/kiss-wink-heart.svg"

    })

})();
