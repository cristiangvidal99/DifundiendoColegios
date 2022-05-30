const usuario = document.querySelector('#usuario');
const password = document.querySelector('#password');
const formulario = document.querySelector('#login-form');

formulario.addEventListener('submit', enviarForm);

function validarCampos() {
  if (usuario.value === "admin" && password.value === "admin") {
    Swal.fire({
      title: 'Correcto',
      icon: 'success',
      text: 'Ha iniciado correctamente sesión',
    })
    setTimeout(() => {
      window.location.href = "../admin/administrador.html"
    }, 3000);
  } else {
    setTimeout(() => {
      Swal.fire({
        title: 'Error!',
        text: 'Ha ocurrido un error',
        icon: 'error',
        confirmButtonText: 'Continuar'
      })
    }, 3000);
  }
}
// validarCampos();
function enviarForm(e) {
  e.preventDefault();
  validarCampos();
}