const container = document.querySelector("#container");

const changeSize = document.querySelector("#size")

const clearButton = document.querySelector("#clear");

let size = prompt("How many squares do you want?");   

var gridBoxes;

function createGrid(size) {

    document.getElementById("container").style.gridTemplateColumns = 'repeat(${size}, 1fr)';
    document.getElementById("container").style.gridTemplateRows = 'repeat(${size}, 1fr)';

    for (let i = 0; i < size * size; i++){
        let div = document.createElement("div");
        div.classList.add("gridBox");
        container.appendChild(div);
    }
    gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseover", (e) => {
            gridBox.classList.add("active");
        });
    });
}

clearButton.addEventListener("click", (e) => {
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove("active")
    });
});

changeSize.addEventListener("click", (e) => {
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove("active");
    });
    size = prompt("How many squares per side do you want?")
    createGrid(size);
});

createGrid(size);

