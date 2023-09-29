//fillAll implementation - clicking the fillAll button after choosing a color from the drop down menu will turn all the current cells into that color
//09/29 - if the cell is colored lets say blue, and you fill all and choose red, it doesn't override the blue. The cells stay blue instead of red
//09/29 - if you click fill uncolored though, the red overrides the blue.

document.getElementById("colorAll").addEventListener("click", colorAll); // Add click event listener to the element id colorAll button

function colorAll() //function definiton/header
{
    for (let row of table.rows) //loop thru each row of the table
    {
        for (let cell of row.cells) //in each row, loop through each cell aka column loop
        {
            cell.style.backgroundColor = document.getElementById("colorPicker").value; // Set the background color of current cell to color selected in the dropdown
        }
    }
}