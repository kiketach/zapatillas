const loginForm = document.querySelector('#loginForm');
 loginForm.addEventListener('submit', (e) => {
     e.preventDefault()
     const email = document.querySelector('#email').value;
     const password = document.querySelector('#password').value;
     const Users = JSON.parse(localStorage.getItem('users')) || []
     const validUser = Users.find(user => user.email === email && user.password === password)
     if(!validUser){
         return alert('Usuario y/o contraseña son incorrectos o no existen.')
     }
     Swal.fire({
        title: 'Felicidades, has ingresado correctamente.',
        width: 600,
        padding: '3em',
        color: '#e1e1e1',
        background: '#fff url(https://media.istockphoto.com/id/951172240/es/vector/bal%C3%B3n-de-f%C3%BAtbol-acuarela.jpg?s=612x612&w=0&k=20&c=FfWPtuAPKQwPyBaZNmF9rVHPUKja7D_K2sGbLujlLKs=)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("http://3.bp.blogspot.com/-4Wzb_YuRyzE/VHdhkdQPDGI/AAAAAAAAACg/9_-_AqzCg3U/s1600/TgC_mundial03i_ar.gif")
          left top
          no-repeat
        `
      }).then(() => {
     localStorage.setItem('login_success', JSON.stringify(validUser))
     window.location.href = '../../index.html'
    })
 })