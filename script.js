const gridContainer = document.getElementById('gridContainer');

function changeColor(e) {
    console.log(e);
    e.target.style.backgroundColor = `#121212`;
    console.log('test')
}

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(gridElement);
    }
}

window.onload = () => {
    createGrid(16);
}