// Select color input
// Select size input
const gridForm = document.getElementById('sizePicker');
const colorForm = document.getElementById('colorPicker');
// When size is submitted by the user, call makeGrid()
gridForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const gridHeight = gridForm[0].value;
    const gridWidth = gridForm[1].value;
// Call makeGrid()
    makeGrid(gridHeight, gridWidth);
});


function makeGrid(height, width) {
// Select the canvas
    const canvas = document.querySelector('#pixelCanvas');
// Clear the canvas
    canvas.innerHTML = '';
// Use a nested loop to create and append rows and data cells
    for (let i = 0; i < height; i++) {
        let tr = document.createElement('tr');
        let td = [];
        for (let j = 0; j < width; j++) {
            td[j] = document.createElement('td');
            tr.appendChild(td[j]);
        }
        canvas.appendChild(tr);
    }
// Call paintGrid()
    paintGrid(canvas);
}


function paintGrid(canvas) {
// Get all data cells as a live HTMLCollection
    const trow = canvas.getElementsByTagName('td');
    for (let x = 0; x < trow.length; x++){
        trow[x].addEventListener('click', () => {
            const color = colorForm.value;
            trow[x].style.backgroundColor = color;
        })
    }
}