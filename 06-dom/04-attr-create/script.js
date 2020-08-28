/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //Get the value of the "data-image" attribute from the element with id "source".
    let source = document.getElementById("source").dataset.image;
    console.log(source);

    // Create a new image element inside the target element
    let newimage = document.createElement("newimage");

    // that displays the image referred to by the attribute value.
    newimage.setAttribute("src", source);
    document.getElementById("target").appendChild(newimage);

    // Then remove the original element
    let element = document.getElementById("source");
    element.parentNode.removeChild(element);
    console.log(source.image);

})();
