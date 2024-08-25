const boxes = document.querySelectorAll(".box");

for(let n = 1; n <= 8; n++) {
    if (n % 2 !== 0) {
        for(let i = 8 * (n - 1); i < 8 * n; i += 2) {
            boxes[i].style.backgroundColor = "black";
        }
    }
    else {
        for(let i = 8 * (n - 1) + 1; i < 8 * n; i += 2) {
            boxes[i].style.backgroundColor = "black";
        }
    }
}
