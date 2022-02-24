// Create 16 x 16 grid using divs
const container = document.querySelector('.container');
for (let i = 0; i < (16 * 16); i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.border = "solid 1px blue";
    container.appendChild(pixel);
    pixel.textContent = "yee";
}
// Add "hover" effect
// Add "clear grid" button at top of screen
// Allow user input (prompt) for grid size (>= 100 x 100)
// Stay within 960px wide
// OPTIONAL: Each pass of mouse adds 10% black to color, after 10 passes the quare is black