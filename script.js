const gridContainer = document.getElementById('gridContainer');

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridContainer.appendChild(gridElement);
    }
}

window.onload = () => {
    createGrid(16);
}