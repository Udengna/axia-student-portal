document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const messageArea = document.getElementById('message');

    // Simple validation: check if username is "user" (case-insensitive)
    if (username.toLowerCase() === 'user') {
        messageArea.textContent = 'Login successful!';
        messageArea.style.color = 'green';
        // In a real application, you would redirect the user or handle the session here
    } else {
        messageArea.textContent = 'Invalid username or password.';
        messageArea.style.color = 'red';
    }
});
