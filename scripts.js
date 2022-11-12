const grid = document.querySelector('.grid-container');
const gridInputBox = document.querySelector('#gridInput');
const gridSlider = document.querySelector('#gridRange');
const gridCreateButton = document.querySelector('.gridCreate');

// Create grid of selected size on webpage
// Adds event listener to each square to change color when mouse over
function createGrid() {
    grid.innerHTML = "";
    gridSize = gridSlider.value;

    for (let row = 0; row < gridSize; row++) {
        const row = document.createElement('div');
        row.classList.add("grid-row");

        for(let col = 0; col < gridSize; col++) {
            const col = document.createElement('div');
            col.classList.add("grid-col");
            col.style.width = 500 / gridSize + "px";
            col.style.height = 500 / gridSize + "px";
            col.addEventListener('mouseover', (event) => {event.target.classList.add("square-clicked")});
            row.appendChild(col);
        }

        grid.appendChild(row);
    }
}

// Updates slider to represent inputted value in text box
gridInputBox.addEventListener('input', function() {
    let inputVal = this.value;

    // Limit input to 1 - 100 (inclusive)
    if(inputVal < 1) {
        inputVal = 1;
    } else if(inputVal > 100) {
        inputVal = 100;
    }

    gridSlider.value = inputVal;
});

// Updates input box with slider changes
gridSlider.addEventListener('input', function() {
    gridInputBox.value = this.value
});

// Creates new grid with inputted value from slider or input box
gridCreateButton.addEventListener('click', createGrid);

// Initialise Grid
createGrid();