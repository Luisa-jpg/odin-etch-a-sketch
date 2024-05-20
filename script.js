const canvas = document.querySelector(".canvas");

function grid(size) {
    if (size > 100) size = 100;
    const rows = [];

    for (let i = 0; i < size; i++) { 
        rows[i] = document.createElement("div");
        canvas.appendChild(rows[i]);
        rows[i].classList.add("row");
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            rows[i].appendChild(square);
            square.classList.add("square");
        }
    }
};

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let sizeInput = prompt("Set your canvas size (up to 100): ", 16);
    +sizeInput;
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    };
    grid(sizeInput);
});

grid(16);