const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const gridContainer = document.getElementById('gridContainer');

sizeSlider.onchange = (e) => updateSize(e.target.value);

function updateSize(value) {
    sizeValue.textContent = `${value} x ${value}`;
    clearGrid();
    createGrid(value);
}

function clearGrid() {
    gridContainer.innerHTML = ''
}

function changeColor(e) {
    e.target.style.backgroundColor = `#121212`;
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