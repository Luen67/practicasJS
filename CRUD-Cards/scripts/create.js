const form = document.querySelector('#form');
const avatar = document.querySelector('#avatar');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const fechaNacimiento = document.querySelector('#fecha_nacimiento');
const genero = document.querySelectorAll('input[name="gender"]');
const pais = document.querySelector('#pais');
const descripcion = document.querySelector('#descripcion');
const btnEnviar = document.querySelector('#btn_enviar');
const labelValidation = document.querySelector('#validation');

btnEnviar.addEventListener('click', () => {

    if(!validaForm()){
        labelValidation.textContent = 'Los campos avatar, nombre, apellido, fecha y genero son obligatorios';
        return;
    }

    const persona = {
        'avatar': avatar.value,
        'nombre': nombre.value,
        'apellido': apellido.value,
        'fechaNacimiento': fechaNacimiento.value,
        'genero': getRadioCheckedValue(genero),
        'pais': pais.value,
        'descripcion': descripcion.value
    };

    postPersona(persona);
});

const postPersona = async(persona) => {
    const response = await fetch(URL_FIREBASE+'.json', {
        method: 'POST',
        headers: {'Content-type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(persona)
        
    });

    if(response.status === 200){
        alert("Persona guardada exitosamente");
        labelValidation.textContent = '';
        form.reset();
    }
    else{
        alert("Se presento un error");
    }
}