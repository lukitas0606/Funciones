const azulDiv = document.getElementById("azul");
const rojoDiv = document.getElementById("rojo");
const verdeDiv = document.getElementById("verde");
const amarilloDiv = document.getElementById("amarillo");

function cambiarColor(event) {
    const currentColor = event.target.style.backgroundColor;
    if (currentColor === "black") {
        event.target.style.backgroundColor = event.target.dataset.originalColor;
    } else {
        event.target.style.backgroundColor = "black";
    }
}

azulDiv.addEventListener("click", cambiarColor);
rojoDiv.addEventListener("click", cambiarColor);
verdeDiv.addEventListener("click", cambiarColor);
amarilloDiv.addEventListener("click", cambiarColor);

azulDiv.dataset.originalColor = azulDiv.style.backgroundColor;
rojoDiv.dataset.originalColor = rojoDiv.style.backgroundColor;
verdeDiv.dataset.originalColor = verdeDiv.style.backgroundColor;
amarilloDiv.dataset.originalColor = amarilloDiv.style.backgroundColor;