document.addEventListener('DOMContentLoaded', function () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        document.getElementById('FirstName').value = currentUser.firstName || '';
        document.getElementById('LastName').value = currentUser.lastName || '';
        document.getElementById('Email').value = currentUser.email || '';
        document.getElementById('Password').value = currentUser.password || ''; // Incluye el campo de contraseña
        document.getElementById('RepeatPassword').value = currentUser.password || ''; // Incluye el campo de repetición de contraseña
        document.getElementById('Address').value = currentUser.address || '';
        document.getElementById('Country').value = currentUser.country || '';
        document.getElementById('State').value = currentUser.state || '';
        document.getElementById('City').value = currentUser.city || '';
        document.getElementById('PhoneNumber').value = currentUser.phoneNumber || '';
    } else {
        alert('No user is logged in.');
        window.location.href = 'index.html'; // Redirige a la página de inicio de sesión si no hay usuario
    }
});