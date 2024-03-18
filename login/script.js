const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset form fields
    form.reset();
});