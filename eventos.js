
function showAlert() {
    alert("Hola");
}

const eldiv = document.getElementById("soyeldiv");

eldiv.addEventListener('click', function () {
    alert('Hola! Soy el div');
});