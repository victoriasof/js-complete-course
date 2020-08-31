/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here

    let image = document.getElementsByTagName("img");

    let i=0;

    function nextImage() {

        i++;
        if (i > gallery.length - 1) {
            i = 0;
        }

        return gallery[i];
    }

    document.getElementById("next").addEventListener("click", function(){

        image[0].setAttribute("src", nextImage());
    })

})();
