const container = document.querySelector(".container");

function createGrid(number) {
    container.style.gridTemplateColumns = "repeat(" + number + ", 1fr)";
    for (let i = 0; i < (number * number); i++) {
        const square = document.createElement("div");
        square.style.border = "solid 1px black"
        square.style.boxSizing = "border-box";
        container.appendChild(square);
    }
}

createGrid(16);
