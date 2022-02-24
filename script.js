// Create grid using divs
const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');

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
// Add "hover" effect
    pixel.forEach(a => a.addEventListener('mouseenter', setColor.bind(a, 'black')));
}
createGrid(setGridSize());

function setColor(color) {
    if (isDragging) this.style.backgroundColor = color;
}

// Add "clear grid" button at top of screen
const clearButton = document.createElement('button');
clearButton.textContent = "Clear Grid";
clearButton.addEventListener('click', clearGrid)
wrapper.insertBefore(clearButton, container);

function clearGrid() {
    pixel.forEach(a => container.removeChild(a));
    createGrid(setGridSize());
}

// OPTIONAL: Each pass of mouse adds 10% black to color, after 10 passes the square is black