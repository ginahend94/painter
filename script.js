const container = document.querySelector('.canvas');
const clearButton = document.querySelector('.clear');
const button16 = document.querySelector('.btn-16');
const button32 = document.querySelector('.btn-32');
const button100 = document.querySelector('.btn-100');
const buttonCustom = document.querySelector('.custom');
const buttonSave = document.querySelector('.save');
const colorPicker = document.querySelector('.color-picker');

let pixel = [];
let gridSize;

let isDragging = false;
container.addEventListener('mousedown', () => isDragging = true);
container.addEventListener('mouseup', () => isDragging = false);

// Allow user input (prompt) for grid size (>= 100 x 100)
function setGridSize() {
    console.log('hi')
    do { gridSize = parseInt(prompt('What size grid? (Between 16 and 100)', 16)); }
    while (gridSize < 16 || gridSize > 100);
    return gridSize;
}

function createGrid(gridsize) {
    container.innerHTML = '';
    pixel = [];
    for (let i = 0; i < (gridsize * gridsize); i++) {
        pixel[i] = document.createElement('div');
        pixel[i].classList.add('pixel');
        container.appendChild(pixel[i]);
        pixel[i].style.opacity = 0;
    }
    container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
// Add draw on drag
    pixel.forEach(a => a.addEventListener('click', colorPixel.bind(a)));
    pixel.forEach(a => a.addEventListener('mouseover', colorPixel.bind(a)));
}
createGrid(16);
let paintColor = "#000000";
const setColor = (color) => {
    paintColor = color;
    colorPicker.value = color;
}

colorPicker.addEventListener('input', (e) => setColor(e.target.value))

function colorPixel(e) {
    if (isDragging || e.type == 'click' || e.type == 'mousedown') {
        this.style.opacity = `${parseFloat(this.style.opacity) + .1}`;
        this.style.backgroundColor = paintColor;
    }
}

function clearGrid() {
    pixel.forEach(a => a.style.backgroundColor = 'transparent');
}

const clearCanvas = () => {
    if (confirm('Are you sure you want to erase your drawing?')) {
        clearGrid();
        return true;
    }
    return false;
}

clearButton.addEventListener('click', clearCanvas)
button16.addEventListener('click', () => {
    if (clearCanvas()) createGrid(16);
})
button32.addEventListener('click', () => {
    if (clearCanvas()) createGrid(32);
})
button100.addEventListener('click', () => {
    if (clearCanvas()) createGrid(100);
})
buttonCustom.addEventListener('click', () => {
    if (clearCanvas()) createGrid(setGridSize());
})
buttonSave.addEventListener('click', () => console.log('will save'));

const swatchColors = (() => {
    const swatches = [...document.querySelectorAll('.swatch')];
    swatches.forEach(swatch => {
        swatch.style.backgroundColor = swatch.dataset.color;
        swatch.addEventListener('click', (e) => setColor(e.target.dataset.color));
    })
})()

// OPTIONAL: Each pass of mouse adds 10% black to color, after 10 passes the square is black