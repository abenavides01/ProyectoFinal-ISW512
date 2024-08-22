document.addEventListener('DOMContentLoaded', function () {
    // Obtener el índice del viaje desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');

    // Obtener los datos del localStorage
    const rides = JSON.parse(localStorage.getItem('rides')) || [];
    const ride = rides[index];

    // Verificar si el viaje existe
    if (ride) {
        // Mostrar los detalles del viaje
        document.getElementById('departure').textContent = ride.departure;
        document.getElementById('arrival').textContent = ride.arrival;
        document.getElementById('seats').textContent = ride.seats;
        document.getElementById('car').textContent = `${ride.make} ${ride.model}`;
        document.getElementById('fee').textContent = ride.fee > 0 ? 'No' : 'Yes';
    } else {
        alert('Ride not found');
        window.location.href = 'my-rides.html'; // Redirigir si el viaje no se encuentra
    }
});
