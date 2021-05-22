// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  if (formulario.nombre.value.trim().length == 0) {
    alert("Nombre obligatorio");
    return false;
  }

  if (formulario.contraseña.value.trim().length == 0) {
    alert("Contraseña obligatorio");
    return false;
  }
    
  if (formulario.contraseña.value != formulario.confirmacion.value) {
    alert("Confirmacion obligatorio");
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    alert("Email invalido");
    return false;
  }

  if (formulario.pais.value == "") {
    alert("Pais es obligatorio");
    return false;
  }

  if (!formulario.terminos.checked) {
    alert("Debe aceptar los terminos y condiciones");
    return false;
  }

  return true;

}
