document.getElementById('saveButton').addEventListener('click', function (event) {
    event.preventDefault();

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

    // Obtener el nombre del conductor actual
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const driverName = currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Unknown Driver';

    // Crear un objeto con los valores del formulario
    const rideData = {
        driverName,
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

    let rides = JSON.parse(localStorage.getItem('rides')) || [];
    rides.push(rideData);
    localStorage.setItem('rides', JSON.stringify(rides));

    alert('Ride successfully created!   ');
    window.location.href = 'my-rides.html';
});