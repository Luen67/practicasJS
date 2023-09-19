const form = document.querySelector('#form');
const avatar = document.querySelector('#avatar');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const fechaNacimiento = document.querySelector('#fecha_nacimiento');
const genero = document.querySelectorAll('input[name="gender"]');
const pais = document.querySelector('#pais');
const descripcion = document.querySelector('#descripcion');
const btnEditar = document.querySelector('#btn_editar');
const labelValidation = document.querySelector('#validation');
const url = new URLSearchParams(window.location.search);
const idPerson = url.get('id');

btnEditar.addEventListener('click', () => {

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

    updatePersona(persona);
});


const getPersona = async(id) => {
    try{
        const response = await fetch(URL_FIREBASE+id+'.json', {method:'GET'});
        const parsed = await response.json();
        avatar.value = parsed['avatar'];
        nombre.value = parsed['nombre'];
        apellido.value = parsed['apellido'];
        fechaNacimiento.value = parsed['fechaNacimiento'];
        setRadioCheckedValue(genero,parsed['genero']);
        pais.value = parsed['pais'];
        descripcion.value = parsed['descripcion'];
    } catch(error){
        console.log(error);
    }
}

const updatePersona = async(persona) => {
    const response = await fetch('https://js-7f027-default-rtdb.firebaseio.com/'+idPerson+'.json', {
        method: 'PUT',
        headers: {'Content-type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(persona)
        
    });

    if(response.status === 200){
        alert("Persona actualizada exitosamente");
        window.location.href = '/index.html';
    }
    else{
        alert("Se presento un error al actualizar");
    }
}


getPersona(idPerson);