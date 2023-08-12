function pintar(element, color = 'green') {
    const currentColor = element.style.backgroundColor;
    if (currentColor === 'yellow') {
        element.style.backgroundColor = 'white';
    } else {
        element.style.backgroundColor = 'yellow';
    }
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
});