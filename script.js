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

grid(16);