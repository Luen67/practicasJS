const form = document.querySelector('#form');
const avatar = document.querySelector('#avatar');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const fechaNacimiento = document.querySelector('#fecha_nacimiento');
const genero = document.querySelectorAll('input[name="gender"]');
const pais = document.querySelector('#pais');
const descripcion = document.querySelector('#descripcion');
const btnEnviar = document.querySelector('#btn_enviar');
const cardContainer = document.querySelector('#card_container');
const labelValidation = document.querySelector('#validation');
let personas = [];
let idPersona = 1;
let persona = { id: 0};

btnEnviar.addEventListener('click', () => {
    if(persona.id == 0){
        createCard();
    }else{
        updateCard();
    }
});

const createCard = () =>{

    if(!validaForm()){
        labelValidation.textContent = 'Los campos avatar, nombre, apellido, fecha y genero son obligatorios';
        return;
    }

    labelValidation.textContent = "";
    const divCard = document.createElement('div');
    divCard.className = 'card mt-5 d-flex flex-row';
    const img = document.createElement('img');
    img.setAttribute('src',avatar.value);   
    img.setAttribute('id','avatar-'+idPersona);
    img.className = 'card-img-top img__width';
    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body row';
    const h5Name = document.createElement('h5');
    h5Name.className = 'card-text col-6';
    h5Name.textContent = 'Nombre';
    const h5Apellido = document.createElement('h5');
    h5Apellido.className = 'card-text col-6';
    h5Apellido.textContent = 'Apellido';
    const pNombre = document.createElement('p');    
    pNombre.setAttribute('id','nombre-'+idPersona);
    pNombre.textContent = nombre.value;
    pNombre.className = 'card-text col-6';
    const pApellido = document.createElement('p');
    pApellido.textContent = apellido.value; 
    pApellido.setAttribute('id','apellido-'+idPersona);
    pApellido.className = 'card-text col-6';
    const h5Fecha = document.createElement('h5');
    h5Fecha.className = 'card-text col-6';
    h5Fecha.textContent = 'Fecha';
    const h5Genero = document.createElement('h5');
    h5Genero.className = 'card-text col-6';
    h5Genero.textContent = 'Genero';
    const pFecha = document.createElement('p'); 
    pFecha.setAttribute('id','fechaNacimiento-'+idPersona);
    pFecha.textContent = fechaNacimiento.value;
    pFecha.className = 'card-text col-6';
    const pGenero = document.createElement('p'); 
    pGenero.setAttribute('id','genero-'+idPersona);
    pGenero.className = 'card-text col-6';
    pGenero.textContent = getRadioCheckedValue(genero);
    const buttonEditar = document.createElement('button');
    buttonEditar.className = 'btn btn-primary btn-sm col-5 btn-edit-'+idPersona;
    buttonEditar.setAttribute('id-persona',idPersona);
    buttonEditar.textContent = 'Editar'
    const divSpace = document.createElement('div');
    divSpace.className = 'col-2';
    const buttonEliminar = document.createElement('button');
    buttonEliminar.className = 'btn btn-danger btn-sm col-5 btn-delete-'+idPersona;
    buttonEliminar.setAttribute('id-persona',idPersona);
    buttonEliminar.textContent = 'Eliminar';
    cardContainer.appendChild(divCard);
    divCard.appendChild(img);
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5Name);
    divCardBody.appendChild(h5Apellido);
    divCardBody.appendChild(pNombre);
    divCardBody.appendChild(pApellido);
    divCardBody.appendChild(h5Fecha);
    divCardBody.appendChild(h5Genero);
    divCardBody.appendChild(pFecha);
    divCardBody.appendChild(pGenero);
    divCardBody.appendChild(buttonEditar);
    divCardBody.appendChild(divSpace);
    divCardBody.appendChild(buttonEliminar);

    buttonEditar.addEventListener('click', (e) => {
        editCard(e);
    })

    personas.push({
        'id': idPersona,
        'avatar': avatar.value,
        'nombre': nombre.value,
        'apellido': apellido.value,
        'fechaNacimiento': fechaNacimiento.value,
        'genero': getRadioCheckedValue(genero),
        'pais': pais.value,
        'descripcion': descripcion.value
    })

    idPersona++;

    form.reset();
};

const editCard = (e) => {
    const id = e.currentTarget.getAttribute('id-persona');
    e.currentTarget.textContent = 'Cancelar';
    persona = personas.filter((item) => item.id == id )[0];
    avatar.value = persona.avatar;
    nombre.value = persona.nombre;
    apellido.value = persona.apellido;
    fechaNacimiento.value = persona.fechaNacimiento;
    setRadioCheckedValue(genero,persona.genero);
    pais.value = persona.pais;
    descripcion.value = persona.descripcion;
    labelValidation.textContent = "";
    e.currentTarget.addEventListener('click', (e) => {
        cancelEditCard(e);
    })
}

const updateCard = () => {
    if(!validaForm()){
        labelValidation.textContent = 'Los campos avatar, nombre, apellido, fecha y genero son obligatorios';
        return;
    }

    labelValidation.textContent = "";
    const index = personas.indexOf(persona);
    const buttonEditar = document.querySelector('.btn-edit-'+persona.id)
    document.querySelector('#avatar-'+persona.id).textContent = avatar.value;
    document.querySelector('#nombre-'+persona.id).textContent = nombre.value;
    document.querySelector('#apellido-'+persona.id).textContent = apellido.value;
    document.querySelector('#fechaNacimiento-'+persona.id).textContent = fechaNacimiento.value;
    document.querySelector('#genero-'+persona.id).textContent = getRadioCheckedValue(genero);
    
    persona.avatar = avatar.value;
    persona.nombre = nombre.value;
    persona.apellido = apellido.value;
    persona.fechaNacimiento = fechaNacimiento.value;
    persona.genero = getRadioCheckedValue(genero);
    persona.pais = pais.value;
    persona.descripcion = descripcion.value;

    personas.splice(index, 1, persona);

    buttonEditar.textContent = 'Editar';
    buttonEditar.addEventListener('click', (e) => {
        editCard(e);
    })
    persona = { id: 0};
    form.reset();
}

const cancelEditCard = (e) => {
    e.currentTarget.textContent = 'Editar';
    e.currentTarget.addEventListener('click', (e) => {
        editCard(e);
    })
    persona = { id: 0};
    form.reset();
}

const getRadioCheckedValue = (radioButtons) => {
    let value = "";
    radioButtons.forEach(function(radioButton) {
        if (radioButton.checked) {
          value = radioButton.value;
        }
      });
      return value;
}

const setRadioCheckedValue = (radioButtons, value) => {    
    radioButtons.forEach(function(radioButton) {
        if (radioButton.value == value) {
            radioButton.checked = true;
        }
      });
}

const validaForm = () =>{
    if(avatar.value === "" || nombre.value === "" || apellido.value === "" || fechaNacimiento.value === "" ||
        genero.value === ""){
        return false;
    }
    return true;
}