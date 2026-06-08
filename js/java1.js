const rvForm=document.getElementById("rvMiFormulario");
const rvMens=document.getElementById("rvMensaje");
rvForm.addEventListener("submit",function(e){
    e.preventDefault();
    const rvNom=document.getElementById("rvNombre").value.trim();
    const rvApe=document.getElementById("rvApellido").value.trim();
    const rvCorr=document.getElementById("rvCorreo").value.trim();
    const rvPass=document.getElementById("rvContrasena").value.trim();
    const rvFec=document.getElementById("rvFecha").value;
    if(rvNom===""||rvApe===""){
        rvMostrarMensaje("Por favor ingresa tu nombre y apellido.","error");
        return;
    }
    if(rvCorr===""||!rvCorr.includes("@")){
        rvMostrarMensaje("Ingresa un correo electrónico válido.","error");
        return;
    }
    if(rvPass.length<6){
        rvMostrarMensaje("La contraseña debe tener al menos 6 caracteres.","error");
        return;
    }
    if(rvFec===""){
        rvMostrarMensaje("Selecciona tu fecha de nacimiento.","error");
        return;
    }
    rvMostrarMensaje("¡Registro exitoso! Bienvenido "+rvNom+" 🎉","exito");
    rvForm.reset();
});
function rvMostrarMensaje(rvTexto,rvTipo){
    rvMens.textContent=rvTexto;
    rvMens.className="mensaje "+rvTipo;
}