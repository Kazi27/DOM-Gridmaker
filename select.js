//select cell implementation: when user clicks on the cell with selected color, cell changes into that specified color
document.getElementById("colorPicker").addEventListener("change", () => //add event listener as per usual
{
    table.addEventListener("click", changeCellColor); //add it to table too because u want to detect the click
});

function changeCellColor(event) //func header
{
    if (event.target.tagName === 'TD') //only run when user clicks the cell nothing else
    {
        event.target.style.backgroundColor = document.getElementById("colorPicker").value; //change color of that cell to specified color
    }
}