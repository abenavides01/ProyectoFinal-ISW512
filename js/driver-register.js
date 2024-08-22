document.getElementById('signUpButton').addEventListener('click', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const cedula = document.getElementById('Cedula').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;
    const birthDate = document.getElementById('birthDate').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const carBrand = document.getElementById('carBrand').value;
    const carModel = document.getElementById('carModel').value;
    const carYear = document.getElementById('carYear').value;
    const licensePlate = document.getElementById('licensePlate').value;

    if (!firstName || !lastName || !cedula || !password || !email) {
        alert('Please fill in all required fields.');
        return;
    }
    if (password !== repeatPassword) {
        alert('Passwords do not match!');
        return;
    }

    const driver = {
        type: 'driver',
        firstName,
        lastName,
        cedula,
        password,
        repeatPassword,
        birthDate,
        email,
        phoneNumber,
        carBrand,
        carModel,
        carYear,
        licensePlate
    };

    let drivers = JSON.parse(localStorage.getItem('drivers')) || [];
    drivers.push(driver);
    localStorage.setItem('drivers', JSON.stringify(drivers));

    alert('Driver Registration Successful!');
    window.location.href = 'index.html';
});