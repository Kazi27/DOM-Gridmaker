document.getElementById("colorAll").addEventListener("click", colorAll); // added an event handler that gets tje elemnt from the id "color all" Then it will execute the function 
function changeCellColor(event) { //created a new fucntion that changes the color of each cell
    if (event.target.tagName === 'TD') { // if statment that checks that of the elemnt that was cliocked has a TD tag whocjh is tablescell
        event.target.style.backgroundColor = document.getElementById("colorPicker").value; //grabs value of color and chnages the cell colors
    }
}
