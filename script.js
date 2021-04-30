const person = document.getElementById('person');
const email = document.getElementById('email');
const error = document.getElementById('error');

function sendMail() {
    const menssajeError = [];
    error.innerHTML = '';
   
    if (!person.value.trim().length) {
        menssajeError.push('nombre');
    } 

    if (!email.value.trim().length) {
        menssajeError.push('correo');
    }

    if (menssajeError.length) {
        error.innerHTML = `Ingresa tu ${menssajeError.join(' y ')}`;
    } else {
        alert('Revisa tu correo ✉ ♡');
    }

    person.value = '';
    email.value = '';
    
    return false;
}