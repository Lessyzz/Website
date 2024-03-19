// Assuming you have access to the logged-in user's information
const loggedInUser = {
    name: 'John Doe',
    profilePicture: 'profile.png'
};

// Display the logged-in user's username
const usernameElement = document.getElementById('username');
usernameElement.textContent = loggedInUser.name;

// Form submission handling
const form = document.getElementById('support-form');
const successOverlay = document.getElementById('success-overlay');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(event.target);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    // Send data to server or perform any other desired action
    console.log('Support Ticket Data:', data);

    // Show success overlay
    successOverlay.classList.add("toggle")

});