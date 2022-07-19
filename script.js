function calculargorjeta(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let servicedone = document.getElementById('Servicedone').value;
    let people = document.getElementById('People').value;

    let total = (bill * servicedone) / people;
    total = total.toFixed(2);
    document.getElementById('gorjeta').innerHTML = total;
    document.getElementById('totaltip').style.display = "block";
}

document.getElementById('totaltip').style.display = "none";
document.getElementById('formstyle').addEventListener('submit', calculargorjeta);