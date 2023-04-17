const nombre = document.querySelector(".nombre");
const mail = document.querySelector(".mail");
const materia = document.querySelector(".pedido");
const boton = document.querySelector(".enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener ("click",(e)=>{
	e.preventDefault();
	let error = validarCampos();
	if (error[0]) {
		resultado.innerHTML = error[1];
		resultado.classList.add("negativo")
		resultado.classList.remove("positivo")
	}
	else {
		resultado.innerHTML = "Solicitud enviada correctamente";
		resultado.classList.add("positivo")
		resultado.classList.remove("negativo")
	}
})

function validarCampos() {
	let error = [];
	if (nombre.value.length < 5) {
		error[0]= true;
		error[1]= "El nombre no puede contener menos de 5 caracteres";
		return error;
	}
	else if (nombre.value.length > 40){
		error[0]= true;
		error[1]= "El nombre no puede contener mas de 40 caracteres";
		return error;
	}
	else if (mail.value.length < 5 ||
			mail.value.length > 40 ||
			mail.value.indexOf("@")== -1 ||
			mail.value.indexOf(".")== -1) {
		error[0] = true;
		error[1] = "El mail es inválido";
		return error;
	}
	error[0] = false;
	return error
}