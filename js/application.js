//valida los datos del usuario
function validateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error_msg');

    if (username == 'admin' && password == 'password') {
        console.log('logged in');
        errorElement.innerHTML = 'User is valid';
        errorElement.setAttribute("style", "display:block;");
    } else {
        errorElement.innerHTML = 'Username or Password invalid';
        errorElement.setAttribute("style", "display:block;");
    }
}
//guarda los datos del usuario
function saveUser() {
	const username = document.getElementById('username').value;
	const firstname = document.getElementById('first-name').value;
    const lastname = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
    const repeatpassword = document.getElementById('repeat-password').value;
    const addres = document.getElementById('address').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const phone = document.getElementById('phone').value;

	const user = {
		username,
        firstname,
		lastname,
        email,
		password,
        repeatpassword,
        addres,
        country,
        state,
        city,
        phone,
		"type": "user"
	};

	if (saveToLocalStorage('users', user)) {
		alert('User saved');
		document.location.href = "./dashboard.html";
	} else {
		alert('There was an error registering the user');
	}
}

//guarda los datos del driver
function saveDriver() {
	const username = document.getElementById('username').value;
	const firstname = document.getElementById('first-name').value;
    const lastname = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
    const repeatpassword = document.getElementById('repeat-password').value;
    const addres = document.getElementById('address').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const phone = document.getElementById('phone').value;
    const vehiclemake = document.getElementById('vehicle-make').value;
    const typevehicule = document.getElementById('type-of-vehicle').value;
    const vehileyear = document.getElementById('vehicle-year').value;
    const vehiculeplate = document.getElementById('vehicle-plate').value;

	const driver = {
		username,
        firstname,
		lastname,
        email,
		password,
        repeatpassword,
        addres,
        country,
        state,
        city,
        phone,
        vehiclemake,
        typevehicule,
        vehileyear,
        vehiculeplate,
		"type": "driver"
	};

	if (saveToLocalStorage('drivers', driver)) {
		alert('Driver saved');
		document.location.href = "./dashboard.html";
	} else {
		alert('There was an error registering the driver');
	}
}

document.addEventListener("DOMContentLoaded", function () {
    // Manejar el botón de Google Sign In
    const googleLoginButton = document.getElementById("google-login-button");
    googleLoginButton.addEventListener("click", function () {
        window.location.href = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Diniciar%2Bsesion%2Bgoogle%26rlz%3D1C1GCEA_enCR1093CR1093%26oq%3Dinici%26gs_lcrp%3DEgZjaHJvbWUqDAgCEAAYQxiABBiKBTIGCAAQRRg5Mg8IARAAGEMYsQMYgAQYigUyDAgCEAAYQxiABBiKBTISCAMQABhDGIMBGLEDGIAEGIoFMg8IBBAAGEMYsQMYgAQYigUyBggFEEUYPTIGCAYQRRg9MgYIBxBFGD3SAQg0NTA0ajBqN6gCALACAA%26sourceid%3Dchrome%26ie%3DUTF-8&ec=futura_gmv_dt_so_72586115_e&hl=es&ifkv=AS5LTASPu719cPlUaepa-d6j9GV6xixPZAbgGqym2fosnHOmdopBkPaOU_vJLXSHJSDwYYcwyvVVuA&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S939693072%3A1719193397563896&ddm=0';
    })
})

function bindEvents() {
	if(document.getElementById('register-button')) {
		document.getElementById('register-button').addEventListener('click', registerButtonHandler);
	}
}

function loginButtonHandler(element) {
	validateUser();
}

function registerUserButtonHandler(element) {
	saveUser();
}

function registerDriverButtonHandler(element) {
	saveUser();
}