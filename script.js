// Select the container where the squares will go
const container = document.querySelector('#container');

// Create a 16x16 grid of squares
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square'); // Add the 'square' class to each div
    container.appendChild(square);  // Append the square to the container
}
