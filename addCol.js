//addCol implementation - clicking the addCol button will add a column to the left of the table, matching the amount of rows the column to the right has

// Implementation where you need atleast one cell for addCol to work:
// Add an initial empty row b/c you can't add a column to the left if you have no rows initially
// Possibly change this after rahat implements addRow?
// const table = document.getElementById("grid"); //get ref to table id grid
// const initialRow = table.insertRow(); //insert initial row
// initialRow.insertCell(); //insert the first cell in that intial row

// document.getElementById("addColumn").addEventListener("click", addColumn); //get the addcolumn element and add an event listener to it

// function addColumn() //func header
// {
//     for (let row of table.rows) //loop thru each row in the table
//     {
//         row.insertCell(); //insert a cell into each row aka a column
//     }
// }

// Implementation where addRow works:
//const table = document.getElementById("grid"); //get ref to table id grid // no longer needed as ref is in html file

document.getElementById("addColumn").addEventListener("click", addColumn); //get the addcolumn element and add an event listener to it
function addColumn() //func header

{
    for (let row of table.rows) //loop thru each row in the table
    {
        row.insertCell(); //insert a cell into each row aka a column
    }
}