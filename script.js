// Create 16 x 16 grid using divs
const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');
let pixel = [];
for (let i = 0; i < (16 * 16); i++) {
    pixel[i] = document.createElement('div');
    pixel[i].classList.add('pixel');
    pixel[i].style.border = "solid 1px blue";
    container.appendChild(pixel[i]);
}

// Add "hover" effect
pixel.forEach(a => a.addEventListener('mouseover', setColor.bind(a, 'black')));

function setColor(color) {
    this.style.backgroundColor = color;
}
// Add "clear grid" button at top of screen
const clearButton = document.createElement('button');
clearButton.textContent = "Clear Grid";
clearButton.addEventListener('click', clearGrid)
wrapper.insertBefore(clearButton, container);

function clearGrid() {
    pixel.forEach(a => a.style.backgroundColor = 'transparent');
}

// Allow user input (prompt) for grid size (>= 100 x 100)

// Stay within 960px wide
// OPTIONAL: Each pass of mouse adds 10% black to color, after 10 passes the square is black