

let boxes = [
    document.getElementById("box1"),
    document.getElementById("box2"),
    document.getElementById("box3"),
    document.getElementById("box4"),
    document.getElementById("box5"),
    document.getElementById("box6"),
    document.getElementById("box7"),
    document.getElementById("box8"),
    document.getElementById("box9"),
];

boxes.forEach((box) => {
    box.addEventListener("click", clickBox);
})

let turn = 0;

function clickBox() {
    if (this.textContent) {
        return;
    }
    else if (turn % 2 === 0) {
        this.textContent = "X";
        turn++;
    }
    else {
        this.textContent = "O";
        turn++;
    }
}

var winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

document.getElementById("button").addEventListener("click", resetGame);

function resetGame () {
    boxes.forEach( (box) => {
        box.textContent = "";
    }),

    turn = 0;
}