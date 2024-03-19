const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loggedInUser = authUser(username, password);

    if (loggedInUser) {
        message.textContent = `Hoşgeldiniz, ${loggedInUser}!`;
        message.classList.remove('error');
        message.classList.add('success');
    } else {
        message.textContent = 'Kullanıcı adı veya parola yanlış!';
        message.classList.remove('success');
        message.classList.add('error');
    }
});

function authUser(username, password) {
    // Here, you would typically check the username and password against a database or API
    // For this example, let's assume that the correct credentials are "admin" for both username and password
    if (username === 'admin' && password === 'admin') {
        setTimeout(() => {
            window.location.href = "../ticket-form/index.html";
        }, 3000);
        return 'Admin User';
    }
    return null;
}