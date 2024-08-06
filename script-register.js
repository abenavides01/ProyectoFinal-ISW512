document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript cargado y DOM listo.");

    // Obtén el formulario y los campos de contraseña
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const repeatPassword = document.getElementById('repeat-password');

    // Añade un manejador para el evento de envío del formulario
    form.addEventListener('submit', function (event) {
        // Verifica si las contraseñas coinciden
        if (password.value !== repeatPassword.value) {
            // Muestra una alerta si las contraseñas no coinciden
            alert('Las contraseñas no coinciden.');
            // Previene el envío del formulario
            event.preventDefault();
        }
    });
});