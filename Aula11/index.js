function Salvar(){
    let table = document.querySelector('.table');
    let row = table.insertRow();
    let col0 = row.insertCell(0);
    let col1 = row.insertCell(1);
    let col2 = row.insertCell(2);
    let col3 = row.insertCell(3);
    let col4 = row.insertCell(4);
    let nome = document.getElementById('nome').value;
    col0.innerHTML = document.getElementById('nome').value;
    col1.innerHTML = document.getElementById('email').value;
    col2.innerHTML = document.getElementById('nasc').value;
    col3.innerHTML = document.getElementById('estado').value;
    col4.innerHTML = '<i class="bi bi-pencil-square"></i>';
}