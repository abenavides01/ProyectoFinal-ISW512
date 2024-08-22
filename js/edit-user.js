document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        document.getElementById('FirstName').value = currentUser.firstName || '';
        document.getElementById('LastName').value = currentUser.lastName || '';
        document.getElementById('Email').value = currentUser.email || '';
        document.getElementById('Address').value = currentUser.address || '';
        document.getElementById('Country').value = currentUser.country || '';
        document.getElementById('State').value = currentUser.state || '';
        document.getElementById('City').value = currentUser.city || '';
        document.getElementById('PhoneNumber').value = currentUser.phoneNumber || '';
    } else {
        alert('No user is logged in.');
        window.location.href = 'index.html'; // Redirige a la página de inicio de sesión si no hay usuario
    }

    document.getElementById('saveButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir la acción por defecto del botón

        // Obtener los valores de los campos del formulario
        const firstName = document.getElementById('FirstName').value;
        const lastName = document.getElementById('LastName').value;
        const email = document.getElementById('Email').value;
        const password = document.getElementById('Password').value;
        const repeatPassword = document.getElementById('RepeatPassword').value;
        const address = document.getElementById('Address').value;
        const country = document.getElementById('Country').value;
        const state = document.getElementById('State').value;
        const city = document.getElementById('City').value;
        const phoneNumber = document.getElementById('PhoneNumber').value;

        // Validar campos
        if ([firstName, lastName, email, address, country, state, city, phoneNumber].includes('')) {
            alert('Please fill out all fields except Password and Repeat Password.');
            return;
        }

        // Validar contraseñas
        if (password !== repeatPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Obtener la lista de usuarios del almacenamiento local
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Encontrar el índice del usuario actual
        const userIndex = users.findIndex(user => user.email === currentUser.email);

        if (userIndex !== -1) {
            // Actualizar la información del usuario
            users[userIndex] = {
                firstName,
                lastName,
                email,
                password, // Actualizar también la contraseña
                address,
                country,
                state,
                city,
                phoneNumber
            };

            // Guardar la lista actualizada en el almacenamiento local
            localStorage.setItem('users', JSON.stringify(users));

            // Actualizar la información del usuario actual en el almacenamiento local
            localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));

            alert('Profile updated successfully!');
        } else {
            alert('User not found.');
        }
    });
});