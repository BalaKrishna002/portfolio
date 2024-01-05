
// Copyright Year
const element = document.getElementById("year")
element.textContent = new Date().getFullYear();

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