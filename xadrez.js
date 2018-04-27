function addDiv(color) {
    document.querySelector('#grid').innerHTML += "<div class='"+color+"'></div>"
}

function addBlack () {
    addDiv('black');
}

function addWhite() {
    addDiv('white');
}

function makeGrid() {
    const gap = 50;
    for (let i = 0; i < 8; i++)
        for (let j = 0; j < 8; j++)
            if (i%2 == j%2)
                setTimeout(addBlack, (i*8+j)*gap);
            else
                setTimeout(addWhite, (i*8+j)*gap);
}

makeGrid()