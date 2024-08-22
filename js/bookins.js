document.addEventListener('DOMContentLoaded', function () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Por favor, inicie sesión primero.');
        window.location.href = 'index.html';
        return;
    }

    const bookings = JSON.parse(localStorage.getItem('rides')) || [];
    const bookingsTable = document.getElementById('bookingsTable');

    bookingsTable.innerHTML = '';

    bookings.forEach((ride, index) => {
        // Si no tiene estado, se define como 'Pendiente' inicialmente
        if (!ride.status) {
            ride.status = 'Pendiente';
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="User">${ride.driverName || 'Desconocido'}</td>
            <td data-label="Ride">${ride.departure} - ${ride.arrival}</td>
            <td data-label="Status">${ride.status}</td>
            <td data-label="Accept/Reject">
                <a href="#" class="accept-btn" data-index="${index}">Aceptar</a> | 
                <a href="#" class="reject-btn" data-index="${index}">Rechazar</a>
            </td>
        `;
        bookingsTable.appendChild(row);
    });

    bookingsTable.addEventListener('click', function (event) {
        if (event.target.classList.contains('accept-btn')) {
            const index = event.target.getAttribute('data-index');
            bookings[index].status = 'Aceptado';
            alert(`Reserva ${index} aceptada`);
            updateTableAndLocalStorage(bookings);
        } else if (event.target.classList.contains('reject-btn')) {
            const index = event.target.getAttribute('data-index');
            bookings[index].status = 'Rechazado';
            alert(`Reserva ${index} rechazada`);
            updateTableAndLocalStorage(bookings);
        }
    });

    updateNavbar();
});

function updateTableAndLocalStorage(bookings) {
    // Actualizar el localStorage
    localStorage.setItem('rides', JSON.stringify(bookings));

    // Actualizar la tabla
    const bookingsTable = document.getElementById('bookingsTable');
    bookingsTable.innerHTML = '';
    bookings.forEach((ride, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="User">${ride.driverName || 'Desconocido'}</td>
            <td data-label="Ride">${ride.departure} - ${ride.arrival}</td>
            <td data-label="Status">${ride.status}</td>
            <td data-label="Accept/Reject">
                <a href="#" class="accept-btn" data-index="${index}">Aceptar</a> | 
                <a href="#" class="reject-btn" data-index="${index}">Rechazar</a>
            </td>
        `;
        bookingsTable.appendChild(row);
    });
}

function updateNavbar() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.type === 'user') {
        const ridesLink = document.getElementById('ridesLink');
        if (ridesLink) {
            ridesLink.style.display = 'none';
        }
    }
}