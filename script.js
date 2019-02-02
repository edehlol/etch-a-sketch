let container = document.getElementById('container');
let clear = document.getElementById('clear');
let grid = document.getElementById('grid');
let dimension = 16;
let size = 480 / dimension;
let div = [];



function createGrid() {

    container.setAttribute('style', 'grid-template-rows: repeat(' + dimension + ',' + size + 'px' + ')');
    container.setAttribute('style', 'grid-template-columns: repeat(' + dimension + ',' + size + 'px' + ')');

    for (let rows = 0; rows < dimension * dimension; rows++) {
        div[rows] = document.createElement('div');
        div.id = rows+1;
        div[rows].addEventListener('mouseover', function() {
            div[rows].style.backgroundColor = 'red';
        })

        container.appendChild(div[rows])
    }

};

function clearGrid() {
    clear.addEventListener('click', function () {
        for (let i = 0; i < div.length; i++) {
            div[i].style.backgroundColor = 'yellow';
        }
    })

}
createGrid();
clearGrid();

grid.addEventListener('click', function () {
    dimension = prompt('What dimensions do you want?');
    size = 480 / dimension;
    for (let i = 0; i < div.length; i++) {
        container.removeChild(div[i])
        div[i] = [];
    }
    createGrid();
})
