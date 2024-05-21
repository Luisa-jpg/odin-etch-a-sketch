const canvas = document.querySelector(".canvas");
let squares;
let mode = "hover";

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
        };
    };

    const squares = document.querySelectorAll(".square");
    for (let el of squares) {
        el.addEventListener("mouseover", () => {
            el.classList.add("square-hover");
        });
        el.addEventListener("mouseout", hoverEffect);
    };
    return squares;
};
    
function hoverEffect(e) {
    e.target.classList.remove("square-hover");
};


const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let sizeInput = prompt("Set your canvas size (up to 100): ", 16);
    +sizeInput;
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    };
    squares = grid(sizeInput);
});


const switchBtn = document.querySelector(".switch input");

squares = grid(16);

switchBtn.addEventListener("click", () => {
    if (mode === "hover") {
        for (let el of squares) {
            el.classList.remove("square-hover");
            el.removeEventListener("mouseout", hoverEffect);
        };
        mode = "rgb";
    } else {
        for (let el of squares) {
            el.classList.remove("square-hover");
            el.addEventListener("mouseout", hoverEffect);
        };
        mode = "hover";
    }
});





/*
    for (const el of squares) {
        el.addEventListener("mouseover", () => {
            el.classList.add("square-hover");
        });
        
        if (mode == "hover") {
            el.addEventListener("mouseout", () => {
                el.classList.remove("square-hover");
            });
        } else {
            el.removeEventListener("mouseout", () => {
                el.classList.remove("square-hover");
            });
        };
    };*/