
// Copyright Year
const element = document.getElementById("year")
element.textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".close-btn").addEventListener("click", function() {
        var notification = document.querySelector(".notification");
        notification.style.top = "-60px"; // Adjust this value to move notification upwards
        document.getElementById("header").style.marginTop = "0"; // Adjust this value to move content downwards
    });
});

// Toggle Menu bar
function toogle(){
    const hiddenContent = document.getElementById('menu');
    const computedStyle = window.getComputedStyle(hiddenContent);
    const displayProperty = computedStyle.getPropertyValue('display');
    if (displayProperty === 'none') {
        hiddenContent.style.display = 'contents'; // Show the content
    } else {
        hiddenContent.style.display = 'none'; // Hide the content
    }
}

// JavaScript code for hiding the loader when the page is loaded
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});