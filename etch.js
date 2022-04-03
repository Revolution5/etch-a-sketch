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
createGrid(16);

function draw() {
    const squares = Array.from(document.querySelectorAll(".square"));

    squares.forEach(square => {
        square.addEventListener("mouseover", function(e) {
            if(e.buttons == 1) 
                square.style.backgroundColor = "black";
        })
    })
}

draw();

const resetbtn = document.querySelector(".reset");

resetbtn.addEventListener("click", function(e) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let input = 0;
    do {
        input = window.prompt("Enter a new size for the grid (must be a number in the range of 16 to 100).")
    } 
    while(input < 16 || input > 100)
    createGrid(input);
    draw();
})