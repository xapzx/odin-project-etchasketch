const grid = document.querySelector('.grid-container');

const grid_size = 16;
// Create grid of selected size on webpage
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

createGrid(grid_size);