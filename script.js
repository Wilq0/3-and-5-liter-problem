let literAmount1HTML = document.getElementById("literAmount1");
let literAmount1 = 0;
let literAmount2HTML = document.getElementById("literAmount2");
let literAmount2 = 0;
let timeTook = 0;

function emptyButton1() {
    literAmount1 = 0;
    literAmount1HTML.innerText = literAmount1;
}

function emptyButton2() {
    literAmount2 = 0;
    literAmount2HTML.innerText = literAmount2;
}

function fillButton1() {
    literAmount1 = 3;
    literAmount1HTML.innerText = literAmount1;
}

function fillButton2() {
    literAmount2 = 5;
    literAmount2HTML.innerText = literAmount2;
}
/*
function swapLiquid(container) {
    if (container == true) {
        literAmount2 = literAmount2+literAmount1;
        literAmount1 = 0;
        literAmount1HTML.innerText = literAmount1;
        literAmount2HTML.innerText = literAmount2;
        if (literAmount2 > 5) {
            literAmount2 = 5;
            literAmount2HTML.innerText = literAmount2;
        }
    } else {
        literAmount1 = literAmount1+literAmount2;
        literAmount2 = 0
        literAmount2HTML.innerText = literAmount2;
        literAmount1HTML.innerText = literAmount1;
        if (literAmount1 > 3) {
            literAmount1 = 3;
            literAmount1HTML.innerText = literAmount1;
        }
    }
}
*/

function swapLiquid(container) {
    if (container == true) {
        for (let i = literAmount1; i > 0; i--) {
            if (literAmount2 != 5) {
                literAmount2++;
                literAmount1--;
                literAmount2HTML.innerText = literAmount2;
                literAmount1HTML.innerText = literAmount1;
            } else {
                break;
            }
        }
    } else {
        for (let i = literAmount2; i > 0; i--) {
            if (literAmount1 != 3) {
                literAmount1++;
                literAmount2--;
                literAmount2HTML.innerText = literAmount2;
                literAmount1HTML.innerText = literAmount1;
            } else {
                break;
            }
        }
    }
}

function winGame() {
    timeTook++
    if (literAmount2 == 4) {
        document.getElementById("winText").innerText = `You won the game in ${timeTook} seconds!`;
        clearInterval(interval);
    }
}

let interval = setInterval(winGame, 1000);