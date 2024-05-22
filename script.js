const canvas = document.querySelector(".canvas");
let squares;
let mode = "hover";
let rgbStatus = "off";

function grid(size = 16) {
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
    e.target.removeAttribute("style");
};

function randomRGBA() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.round((Math.random() * 0.99 + 0.01) * 10) / 10; // added alpha because of optics, but can't be 0
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
};

function setRGBA (e) {
    e.target.style.backgroundColor = randomRGBA();
};

function clear() {
    for (let el of squares) {
        el.classList.remove("square-hover");
        el.removeAttribute("style");
    };
};

const sizeBtn = document.querySelector("#sizebtn");
const switchBtn = document.querySelector(".switch input");
const hoverP = document.querySelector("#hover");
const sketchP = document.querySelector("#sketch");
const clearBtn = document.querySelector("#clearBtn");
const rgbBtn = document.querySelector(".rgbCheck");

hoverP.setAttribute("style", "color: plum");

sizeBtn.addEventListener("click", () => {
    let sizeInput = prompt("Set your canvas size (up to 100): ", 16);
    +sizeInput;
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    };
    squares = grid(sizeInput);
});

squares = grid(16);

switchBtn.addEventListener("click", () => {
    if (mode === "hover") {
        for (let el of squares) {
            el.removeEventListener("mouseout", hoverEffect);
        };
        mode = "sketch";
        sketchP.setAttribute("style", "color: plum");
        hoverP.setAttribute("style", "color: white");
    } else {
        for (let el of squares) {
            el.addEventListener("mouseout", hoverEffect);
        };
        mode = "hover";
        hoverP.setAttribute("style", "color: plum");
        sketchP.setAttribute("style", "color: white");
    }
});

clearBtn.addEventListener("click", clear);

rgbBtn.addEventListener("click", () => {
    rgbBtn.classList.toggle("active-check");
    if (rgbStatus === "on") {
        for (let el of squares) {
            el.removeEventListener("mouseover", setRGBA);
        };
        rgbStatus = "off";
    } else {
        for (let el of squares) {
            el.addEventListener("mouseover", setRGBA);
        };
        rgbStatus = "on";
    }
});