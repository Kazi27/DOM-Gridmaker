// retrieves element called removeColors once a click event occurs
document.getElementById("removeColors").addEventListener("click", removeColors);

// function remove all colors present in the grid
function removeColors() {
    for (let row of table.rows) {
        for (let cell of row.cells) {
            cell.style.backgroundColor = "";
        }
    }
}