document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('errorMessage');

        let isValid = true;

        // Validate email
        if (!emailInput.value) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else {
            emailInput.classList.remove('is-invalid');
        }

        // Validate password
        if (!passwordInput.value) {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        } else {
            passwordInput.classList.remove('is-invalid');
        }

        if (isValid) {
            // Simulate an API call for login
            const email = emailInput.value;
            const password = passwordInput.value;

            if (email === "test@example.com" && password === "password") {
                alert("Login successful!");
                errorMessage.textContent = '';
            } else {
                errorMessage.textContent = 'Invalid email or password.';
            }
        }
    }
});
