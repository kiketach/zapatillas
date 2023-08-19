const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        if (data.success) {
            Swal.fire({
                icon: 'Buen trabajo 👌!',
                title:'🎉Registro exitoso!📋',
                text: 'realicé el inicio de sesión por favor.',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
             window.location.href = '../pages/iniciarSesion.html'
            })
        } else {
            alert('Error en el registro');
        }
    } catch (error) {
        console.log('Error en el registro', error);
    }
});

