const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Here, you can implement your login logic, such as sending a request to a server
    // or checking the username and password against a local database.
    // For this example, we'll just log the values to the console.
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset the form after submission
    loginForm.reset();
});