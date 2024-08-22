document.addEventListener('DOMContentLoaded', function () {
    // Obtener el índice del viaje desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');

    // Obtener los datos del localStorage
    const rides = JSON.parse(localStorage.getItem('rides')) || [];

    // Rellenar el formulario con los datos del viaje a editar
    if (index !== null && rides[index]) {
        const ride = rides[index];

        document.getElementById('departure').value = ride.departure;
        document.getElementById('arrival').value = ride.arrival;
        document.getElementById('time').value = ride.time;
        document.getElementById('seats').value = ride.seats;
        document.getElementById('fee').value = ride.fee;
        document.getElementById('make').value = ride.make;
        document.getElementById('model').value = ride.model;
        document.getElementById('year').value = ride.year;

        // Marcar los días seleccionados
        document.querySelectorAll('input[name="days"]').forEach(checkbox => {
            checkbox.checked = ride.days.includes(checkbox.value);
        });
    }

    // Manejar el envío del formulario
    document.getElementById('editRideForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const departure = document.getElementById('departure').value;
        const arrival = document.getElementById('arrival').value;
        const time = document.getElementById('time').value;
        const seats = document.getElementById('seats').value;
        const fee = document.getElementById('fee').value;
        const make = document.getElementById('make').value;
        const model = document.getElementById('model').value;
        const year = document.getElementById('year').value;

        // Obtener los días seleccionados
        const days = [];
        document.querySelectorAll('input[name="days"]:checked').forEach(checkbox => {
            days.push(checkbox.value);
        });

        // Crear un objeto con los valores del formulario para cargarlos
        const updatedRide = {
            departure,
            arrival,
            days,
            time,
            seats,
            fee,
            make,
            model,
            year
        };

        // Actualizar el array de viajes en localStorage
        const rides = JSON.parse(localStorage.getItem('rides')) || [];
        rides[index] = updatedRide;
        localStorage.setItem('rides', JSON.stringify(rides));

        alert('Ride updated successfully!');
        window.location.href = 'my-rides.html';
    });
});