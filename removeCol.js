// retrieve element named removeColumn after a click event 
document.getElementById("removeColumn").addEventListener("click", removeColumn); 

// removing column from div 
function removeColumn() { 
    if (table.rows.length > 0 && table.rows[0].cells.length > 0) { 
        for (let row of table.rows) { row.deleteCell(-1); } 
    } 
}