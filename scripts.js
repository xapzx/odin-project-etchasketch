const grid = document.querySelector('.grid-container');

const grid_size = 16;
// Create grid of selected size on webpage
// Adds event listener to each square to change color when mouse over
function createGrid(size) {
    for (let row = 0; row < grid_size; row++) {
        const row = document.createElement('div');
        row.classList.add("grid-row");

        for(let col = 0; col < grid_size; col++) {
            const col = document.createElement('div');
            col.classList.add("grid-col");
            col.style.width = 500 / grid_size + "px";
            col.style.height = 500 / grid_size + "px";
            col.addEventListener('mouseover', (event) => {event.target.classList.add("square-clicked")});
            row.appendChild(col);
        }

        grid.appendChild(row);
    }
}

const gridInputBox = document.querySelector('#gridInput');
const gridSlider = document.querySelector('#gridRange');

gridInputBox.addEventListener('input', function() {
    let inputVal = this.value;

    // Limit input to 1 - 100 (inclusive)
    if(this.value < 1) {
        inputVal = 1;
    } else if(this.value > 100) {
        inputVal = 100;
    }

    gridSlider.value = inputVal;
});

gridSlider.addEventListener('input', function() {
    gridInputBox.value = this.value
});

createGrid(grid_size);