// Select color input
// Select size input
const gridForm = document.getElementById('sizePicker');
const colorForm = document.getElementById('colorPicker');

// When size is submitted by the user, call makeGrid()
gridForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const gridHeight = gridForm[0].value;
    const gridWidth = gridForm[1].value;
    const gridColor = colorForm.value;
    makeGrid(gridHeight, gridWidth, gridColor);
});


function makeGrid(height, width, color) {
// Select the canvas
    const canvas = document.querySelector('#pixelCanvas');
// Clear the canvas
    canvas.innerHTML = '';
    for (let i = 0; i < height; i++) {
        let tr = document.createElement('tr');
        let td = [];
        for (let j = 0; j < width; j++) {
            td[j] = document.createElement('td');
            tr.appendChild(td[j]);
        }
        canvas.appendChild(tr);
    }
    const trow = canvas.getElementsByTagName('td');
    for (let x = 0; x < trow.length; x++){
        trow[x].addEventListener('click', () => {
            trow[x].style.backgroundColor = color;
        })
    }
}