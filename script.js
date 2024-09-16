// the container where the squares will go
const container = document.querySelector('#container');

// Create the grid first its 16 x 16
createGrid(16);

// Function to make the grid and apply hover events
function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear the existing grid

    // make squares and append to the container
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${960 / size}px`;
        square.style.height = `${960 / size}px`;
        container.appendChild(square);
    }

    // Re-apply hover event listeners for the new grid
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseout', () => {
        
           
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

                    let currentOpacity = parseFloat(square.style.opacity);
                    if (currentOpacity > 0) {
                        square.style.opacity = currentOpacity - 0.1;
                    }
                });


        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'blue';
        });
    });
}
// this is my  event listener to the resize button
const resizeButton = document.getElementById('resizeButton');
resizeButton.addEventListener('click', () => {
    let gridsize = prompt('Enter new grid size (e.g., 16 for a 16x16 grid)');

    gridsize = parseInt(gridsize);

    // Validate the grid size input
    if (gridsize > 0 && gridsize <= 100) {
        createGrid(gridsize);  // Call createGrid with new size
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});


const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'rgb(255, 255, 255)'; // Reset to white
        square.style.opacity = 1; // Reset opacity darkness 
    });
});

const blueButton = document.getElementById('blueButton');
  blueButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor='blue';
        square.style.opacity = 1;
    })
});

