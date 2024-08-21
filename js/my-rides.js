document.addEventListener('DOMContentLoaded', function () {
    // Obtener el usuario actual del localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Verificar si el usuario ha iniciado sesión
    if (!currentUser) {
        alert('Por favor, inicie sesión primero.');
        window.location.href = 'Login.html'; // Redirigir a la página de inicio de sesión si no hay usuario
        return;
    }

    // Obtener los datos del localStorage
    const rides = JSON.parse(localStorage.getItem('rides')) || [];
    
    // Obtener la referencia al cuerpo de la tabla
    const tbody = document.querySelector('#ridesTable tbody');

    // Limpiar la tabla antes de llenarla
    tbody.innerHTML = '';

    // Iterar sobre los datos de los viajes y agregar filas a la tabla
    rides.forEach((ride, index) => {
        // Solo mostrar los viajes creados por el usuario actual
        if (ride.username === currentUser.username) {
            const row = document.createElement('tr');

            // Agregar celdas a la fila
            row.innerHTML = `
                <td data-label="From">${ride.departure}</td>
                <td data-label="To">${ride.arrival}</td>
                <td data-label="Seats">${ride.seats}</td>
                <td data-label="Car">${ride.make} ${ride.model}</td>
                <td data-label="Free">${ride.fee > 0 ? 'No' : 'Yes'}</td>
                <td data-label="Actions">
                    <a href="VerRide.html?index=${index}">View</a>| 
                    <a href="EdditRide.html?index=${index}">Edit</a>| 
                    <a href="#" class="delete-btn" data-index="${index}">Delete</a>
                </td>
            `;

            tbody.appendChild(row);
        }
    });

    // Manejar la eliminación de registros
    tbody.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const index = event.target.getAttribute('data-index');
            if (confirm('Are you sure you want to delete this ride?')) {
                deleteRide(index);
            }
        }
    });

    function deleteRide(index) {
        // Obtener los datos del localStorage
        const rides = JSON.parse(localStorage.getItem('rides')) || [];
        // Eliminar el viaje seleccionado
        rides.splice(index, 1);
        // Guardar los datos actualizados en localStorage
        localStorage.setItem('rides', JSON.stringify(rides));
        // Recargar la página para actualizar la tabla
        window.location.reload();
    }

    function updateNavbar() {
        if (currentUser) {
            // Si el usuario actual es de tipo 'user', ocultar el enlace 'Rides'
            if (currentUser.type === 'user') {
                const ridesLink = document.getElementById('ridesLink');
                if (ridesLink) {
                    ridesLink.style.display = 'none';
                }
            }
        }
    }

    updateNavbar();
});