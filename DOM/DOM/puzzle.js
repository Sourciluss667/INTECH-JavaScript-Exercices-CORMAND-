this.canvasArray = [];

function start() {
    changeTitle('Rotate Puzzle !');
    document.getElementById('start-game').textContent = 'Relancer la partie';
    // Remove child elements (if restart)
    const canvasDiv = document.getElementById('canvas');
    canvasDiv.innerHTML = '';

    // Remove display of base image
    document.getElementById('base-image').style.display = 'none';

    // Get cells-quantity
    const cellsQuantity = document.getElementById('cells-quantity').value;
    this.canvasArray = splitImage(cellsQuantity);
    checkWin();
}

function splitImage(qty) {
    // Get image
    const img = document.getElementById('base-image');

    // Get canvas div
    const canvasDiv = document.getElementById('canvas');

    // Loop to create canvas elements, children of canvas div
    const columns = qty;
    const rows = qty;
    const canvasArr = [];

    for (let y = 0; y < columns; ++y) {
        const divCol = document.createElement('div');
        divCol.style.height = Math.floor(img.height / columns) + 'px';
        canvasDiv.appendChild(divCol);
        for (let x = 0; x < rows; ++x) {
            let canvas = document.createElement('canvas');
            canvas.width = img.width / columns;
            canvas.height = img.height / rows;
            canvas.id = 'canvas-' + x + '-' + y;
            canvas.onclick = turnCanvasOnClick(x, y);
            // Random rotate step of 90 degrees
            canvas.degrees = Math.floor(Math.random() * 3) * 90;
            // Draw image into canvas
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, canvas.width * x, canvas.height * y, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
            turnCanvasOnInit(canvas, ctx, x, y);
            divCol.appendChild(canvas);
            canvasArr.push(canvas);
        }
    }

    return canvasArr;
}

// Turn canvas by 90 degrees every click
function turnCanvasOnClick(x, y) {
    return () => {
        let canvas = document.getElementById('canvas-' + x + '-' + y);
        if (canvas.degrees === 270) {
            canvas.degrees = 0;
        } else {
            canvas.degrees += 90;
        }
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(canvas.degrees * Math.PI / 180);
        ctx.drawImage(document.getElementById('base-image'), canvas.width * x, canvas.height * y, canvas.width, canvas.height, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        ctx.restore();
        // Check win
        checkWin();
    }
}

function turnCanvasOnInit(canvas, ctx, x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(canvas.degrees * Math.PI / 180);
    ctx.drawImage(document.getElementById('base-image'), canvas.width * x, canvas.height * y, canvas.width, canvas.height, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    ctx.restore();
}

async function resolve() {
    function* clickGenerator(canvasArray) {
        for (let i = 0; i < canvasArray.length; i++) {
            while (canvasArray[i].degrees !== 0) {
                yield canvasArray[i].onclick();
            }
        }
    }

    const click = clickGenerator(this.canvasArray);
    while (checkWin() === false) {
        await sleep(169);
        click.next();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Use this.canvasArray to check if all cells are turned to 0 degrees
function checkWin() {
    let win = true;
    let count = 0;
    for (let i = 0; i < this.canvasArray.length; i++) {
        if (this.canvasArray[i].degrees !== 0) {
            win = false;
            count++;
        }
    }

    document.getElementById('count').textContent = count;

    if (win) {
        changeTitle('You win !', 'green');
    }

    return win;
}

function changeTitle(str, color = 'black') {
    document.getElementById('title').textContent = str;
    document.getElementById('title').style.color = color;
    document.getElementsByTagName('title')[0].textContent = str;
}