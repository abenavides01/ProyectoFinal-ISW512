
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signUpButton').addEventListener('click', function(event) {
        event.preventDefault();

        const getElementValue = (id) => {
            const element = document.getElementById(id);
            if (element) {
                return element.value;
            } else {
                console.error(`Element with ID ${id} not found`);
                return null;
            }
        };

        const firstName = getElementValue('firstName');
        const lastName = getElementValue('lastName');
        const email = getElementValue('email');
        const password = getElementValue('password');
        const repeatPassword = getElementValue('repeatPassword');
        const address = getElementValue('address');
        const country = getElementValue('country');
        const state = getElementValue('state');
        const city = getElementValue('city');
        const phoneNumber = getElementValue('phoneNumber');

        if ([firstName, lastName, email, password, repeatPassword, address, country, state, city, phoneNumber].includes(null)) {
            alert('Please fill out all fields correctly.');
            return;
        }

        if (password !== repeatPassword) {
            alert('Passwords do not match!');
            return;
        }

        const user = {
            type: 'user',
            firstName,
            lastName,
            email,
            password,
            address,
            country,
            state,
            city,
            phoneNumber
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration Successful!');
        window.location.href = 'index.html';
    });
});
