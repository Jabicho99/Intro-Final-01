function randomSelect(datos) {
    return datos[Math.floor(Math.random() * datos.length)];
}

document.addEventListener('DOMContentLoaded', function() {
    const paises = ['Mesa de ping pong', 'Mesa de futbol', 'Piscina inflable'];
    const selectBtn = document.getElementById('selectBtn');
    const result = document.getElementById('result');

    selectBtn.addEventListener('click', function() {
        const selected = randomSelect(paises);
        result.textContent = `Servicio Sorteado: ${selected}`;
    });
});
