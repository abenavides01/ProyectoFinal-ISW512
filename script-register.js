document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript cargado y DOM listo.");
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const repeatPassword = document.getElementById('repeat-password');

    form.addEventListener('submit', function (event) {
        if (password.value !== repeatPassword.value) {
            alert('Las contraseñas no coinciden.');
            event.preventDefault(); // Evita que el formulario se envíe
        }
    });
});
