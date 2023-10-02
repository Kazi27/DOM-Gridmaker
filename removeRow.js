//add row implementation: removes the row at the bottom 
//const table = document.getElementById("grid"); //get ref to table id grid // no longer needed as ref is in html file
document.getElementById("removeRow").addEventListener("click", removeRow); //get the removeRow element and add an event listener to it

function removeRow() //func header
{
    if (table.rows.length > 0) // check if there are rows in the table
    {
        table.deleteRow(-1); // delete last row (-1)
    }
}