function validarDatos() {
    window.event.preventDefault();

    if(document.form.nombre.value == "") {
        alert("Campo Nombre obligatorio")
        document.form.nombre.focus();
    }
    else if(document.form.correoelectronico.value == "") {
        alert("Campo Email obligatorio")
        document.form.correoelectronico.focus();
    }
    else if(document.form.telefono.value == "") {
        alert("Campo Telefono obligatorio")
        document.form.telefono.focus();
    }
    else if(document.form.mensaje.value == "") {
        alert("Campo Mensaje obligatorio")
        document.form.mensaje.focus();
    };
};

document.querySelector("form").addEventListener("submit", validarDatos);