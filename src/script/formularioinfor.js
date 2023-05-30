document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
      sendEmail();
    }
  });
  
  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
  
    // Validar nombre
    if (name === '') {
      alert('Por favor, ingrese su nombre.');
      return false;
    }
  
    // Validar correo electrónico
    if (email === '') {
      alert('Por favor, ingrese su correo electrónico.');
      return false;
    }
  
    // Validar teléfono
    if (phone === '') {
      alert('Por favor, ingrese su número de teléfono.');
      return false;
    }
  
    // Validar mensaje
    if (message === '') {
      alert('Por favor, ingrese su mensaje.');
      return false;
    }
  
    return true;
  }
  
  function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
  
    // Aquí puedes agregar la lógica para enviar los datos a través de un correo electrónico utilizando una biblioteca o servicio de terceros.
    // Por ejemplo, puedes utilizar el servicio de envío de correo electrónico de Formspree o configurar tu propio servidor de correo.
  
    // Ejemplo de cómo mostrar los datos en la consola
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Teléfono:', phone);
    console.log('Mensaje:', message);
  
  }
  function limpiarFormulario() {
    document.getElementById("contact-form").reset();
  }  


  