document.addEventListener("DOMContentLoaded", function () {
    // Manejar el botón de Google Sign In
    const googleLoginButton = document.getElementById("google-login-button");
    googleLoginButton.addEventListener("click", function () {
        window.location.href = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Diniciar%2Bsesion%2Bgoogle%26rlz%3D1C1GCEA_enCR1093CR1093%26oq%3Dinici%26gs_lcrp%3DEgZjaHJvbWUqDAgCEAAYQxiABBiKBTIGCAAQRRg5Mg8IARAAGEMYsQMYgAQYigUyDAgCEAAYQxiABBiKBTISCAMQABhDGIMBGLEDGIAEGIoFMg8IBBAAGEMYsQMYgAQYigUyBggFEEUYPTIGCAYQRRg9MgYIBxBFGD3SAQg0NTA0ajBqN6gCALACAA%26sourceid%3Dchrome%26ie%3DUTF-8&ec=futura_gmv_dt_so_72586115_e&hl=es&ifkv=AS5LTASPu719cPlUaepa-d6j9GV6xixPZAbgGqym2fosnHOmdopBkPaOU_vJLXSHJSDwYYcwyvVVuA&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S939693072%3A1719193397563896&ddm=0';
    });

    // Manejar el envío del formulario de login
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir la recarga de la página

        // Obtener los valores de los campos
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        //redireccionamiento
        if (username && password) { 
            window.location.href = "search-rides.html";
        } else {
            alert("Credenciales incorrectas, por favor intente nuevamente.");
        }
    });
});