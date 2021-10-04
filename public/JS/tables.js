function agregarFila() {
    document.getElementById("tablaprueba").insertRow(1).innerHTML = '<td contenteditable="true" ></td><td contenteditable="true" ></td><td><button type="button" class="btn btn-danger" onclick="deleteRow(this)">X</button></td>';
}  
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}