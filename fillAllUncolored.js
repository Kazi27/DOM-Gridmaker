//fillAllUncolored implementation - clicking the fillAllUncolored button after choosing a color from the drop down menu will turn all the current cells into that color
//09/29 - if the cell is colored lets say blue, and you fill all and choose red, it DOES override the blue. The cells becomes blue instead of red
//09/29 - the default action of user clicking a cell to turn color hasn't been implemented yet so we need to check if this works with that too

// document.getElementById("colorUncolored").addEventListener("click", colorUncolored); // Add click event listener to the element id colorUncolored button
// const colorPicker = document.getElementById("colorPicker"); //gets ref to input type colorPicker bby it's ID

// function colorUncolored() //function definiton/header
// {
//     const selectedColor = colorPicker.value; // Get the selected color from the color wheel
//     for (let row of table.rows) //loop thru each row of the table
//     {
//         if (cell.style.backgroundColor === "")
//         for (let cell of row.cells) //in each row, loop through each cell aka column loop
//         {
//             cell.style.backgroundColor = document.getElementById("colorPicker").value; // Set the background color of current cell to color selected in the dropdown
//         }
//     }
// }

document.getElementById("colorUncolored").addEventListener("click", colorUncolored); // Add click event listener to the element id colorUncolored button
let colorPicker = document.getElementById("colorPicker");

function colorUncolored() //function definiton/header
{
    const selectedColor = colorPicker.value;
    for (let row of table.rows) //loop thru each row of the table
    {
        for (let cell of row.cells) //in each row, loop through each cell aka column loop
        {
            if (!cell.style.backgroundColor) //checks if background color is undef or empty aka no background color is set aka uncolored. If false then !false -> true so u enter the for loop coloring the uncolored cell
            {
                cell.style.backgroundColor = selectedColor; // Set the background color of current cell to color selected in the dropdown
            }
        }
    }
}