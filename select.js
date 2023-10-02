function changeCellColor(event) {
    if (event.target.tagName === 'TD') {
        event.target.style.backgroundColor = document.getElementById("colorPicker").value;
    }
}