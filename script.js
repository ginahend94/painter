const container = document.querySelector('.canvas');

let pixel = [];

let isDragging = false;
container.addEventListener('mousedown', () => isDragging = true);
container.addEventListener('mouseup', () => isDragging = false);

// Allow user input (prompt) for grid size (>= 100 x 100)
function setGridSize() {
    do { gridSize = parseInt(prompt('What size grid? (Between 16 and 100)', 16)); }
    while (gridSize < 16 || gridSize > 100);
    return gridSize;
}

function createGrid(gridsize) {
    pixel = [];
    for (let i = 0; i < (gridsize * gridsize); i++) {
        pixel[i] = document.createElement('div');
        pixel[i].classList.add('pixel');
        container.appendChild(pixel[i]);
    }
    container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
// Add draw on drag
    pixel.forEach(a => a.addEventListener('click', setColor.bind(a)));
    pixel.forEach(a => a.addEventListener('mousemove', setColor.bind(a)));
}
createGrid(100);

function setColor(e) {
    if (isDragging || e.type == 'click' || e.type == 'mousedown') this.style.backgroundColor = 'black';
}

function clearGrid() {
    pixel.forEach(a => container.removeChild(a));
    createGrid(setGridSize());
}

const swatchColors = (() => {
    const swatches = [...document.querySelectorAll('.swatch')];
    console.log(swatches)
    swatches.forEach(swatch => {
        swatch.style.backgroundColor = swatch.dataset.color;
    })
})()

// OPTIONAL: Each pass of mouse adds 10% black to color, after 10 passes the square is black