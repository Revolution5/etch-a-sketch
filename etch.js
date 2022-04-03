const container = document.querySelector(".container");

function createGrid(number) {
    container.style.gridTemplateColumns = "repeat(" + number + ", 1fr)";
    for (let i = 0; i < (number * number); i++) {
        const square = document.createElement("div");
        square.classList.add("square")
        // square.style.border = "solid 1px black"
        square.style.boxSizing = "border-box";
        container.appendChild(square);
    }
}
createGrid(50);

const squares = Array.from(document.querySelectorAll(".square"));

squares.forEach(square => {
    square.addEventListener("mouseover", function(e) {
        if(e.buttons == 1) 
            square.style.backgroundColor = "black";
    })
})