//fillAll implementation - clicking the fillAll button after choosing a color from the drop down menu will turn all the current cells into that color
//09/29 - if the cell is colored lets say blue, and you fill all and choose red, it doesn't override the blue. The cells stay blue instead of red
//09/29 - if you click fill uncolored though, the red overrides the blue.

// document.getElementById("colorAll").addEventListener("click", colorAll); // Add click event listener to the element id colorAll button
// const colorPicker = document.getElementById("colorPicker");

// function colorAll() //function definiton/header
// {
//     const selectedColor = colorPicker.value; // Get the selected color from the color wheel
//     for (let row of table.rows) //loop thru each row of the table
//     {
//         for (let cell of row.cells) //in each row, loop through each cell aka column loop
//         {
//             //if (!cell.style.backgroundColor) //checks if background color is undef or empty aka no background color is set aka uncolored. If false then !false -> true so u enter the for loop coloring the uncolored cell
//             {
//                 cell.style.backgroundColor = document.getElementById("colorPicker").value;; // Set the background color of the current cell to the selected color
//                 //cell.style.backgroundColor = document.getElementById("colorPicker").value; // Set the background color of current cell to color selected in the dropdown
//             }
//         }
//     }
// }

document.getElementById("colorAll").addEventListener("click", colorAll); // Add click event listener to the element id colorAll button
let colorPicker = document.getElementById("colorPicker");

function colorAll() //function definiton/header
{
    event.defaultPrevented
    const selectedColor = colorPicker.value;
    for (let row of table.rows) //loop thru each row of the table
    {
        for (let cell of row.cells) //in each row, loop through each cell aka column loop
        {
            cell.style.backgroundColor = selectedColor; // Set the background color of current cell to color selected in the dropdown
        }
    }
}