//add row
// const table = document.getElementById("grid"); //get ref to table id grid // no longer needed as ref is in html file
document.getElementById("addRow").addEventListener("click", addRow); // added an event handler that gets tje elemnt from the id "add row" Then it will execute the function 
function addRow() { // Declared the fucntion 
    const newRow = table.insertRow(); // adds a mew row to the table
    for (let i = 0; i < (table.rows[0]?.cells.length || 1); i++) { // For loop thaty loops thorught and checks how many cells should // checks the cells.lenght
        newRow.insertCell(); //this code adds a new cell to the newly created row.
    }
}

