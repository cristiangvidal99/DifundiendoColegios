const usuario = document.querySelector('#usuario');
const password = document.querySelector('#password');
const formulario = document.querySelector('#login-form');

formulario.addEventListener('click', enviarForm);

function validarCampos() {
  if (usuario.value === "admin" && password.value === "admin") {
    Swal.fire({
      title: 'Correcto',
      text: 'Ha iniciado correctamente sesión',
      icon: 'success',
    })
    setTimeout(() => {
      window.location.href = "../admin/administrador.html"
    }, 1000);
  } else {
    setTimeout(() => {
      Swal.fire({
        title: 'Error!',
        text: 'Ha ocurrido un error',
        icon: 'error',
      })
    }, 1000);
  }
}
// validarCampos();
function enviarForm(e) {
  e.preventDefault();
  validarCampos();
}