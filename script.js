// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and body elements
    const changeColorButton = document.getElementById("changeColorButton");
    const body = document.body;

    // Add a click event listener to the button
    changeColorButton.addEventListener("click", function () {
        // Generate a random color (hex code)
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        
        // Set the background color of the body to the random color
        body.style.backgroundColor = randomColor;
    });
});
