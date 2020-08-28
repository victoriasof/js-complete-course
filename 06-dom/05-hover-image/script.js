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

    let image = document.getElementsByTagName("img");
    let newsource = image[0].dataset.hover;
    let source = image[0].src;

    document.querySelector("img").addEventListener("mouseover", function(){

       image[0].setAttribute("src", newsource);

       //ANOTHER WAY: this.src = "../../_shared/img/kiss-wink-heart.svg"

    })

    document.querySelector("img").addEventListener("mouseout", function(){

        image[0].setAttribute("src", source);

        //ANOTHER WAY: this.src = "../../_shared/img/kiss.svg"

    })

})();
