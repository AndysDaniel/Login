
        document.addEventListener('DOMContentLoaded', function () {
            const loginForm = document.getElementById('login-form');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const errorMessage = document.getElementById('error-message');

            loginForm.addEventListener('submit', function (event) {
                event.preventDefault();
                errorMessage.textContent = '';

                if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
                    // Enviar datos y redirigir a la pantalla de inicio de sesión
                    alert('¡Fue logeado!');
                    // Puedes agregar aquí la redirección o realizar otras acciones necesarias
                } else {
                    errorMessage.textContent = 'Correo o contraseña inválidos.';
                }
            });

            document.getElementById('clear-btn').addEventListener('click', function () {
                loginForm.reset();
                errorMessage.textContent = '';
            });

            function validateEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }

            function validatePassword(password) {
                return password.length > 5;
            }
        });
    