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
let edit = false;
let index_;

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

    if(!edit){
        personas.push(persona);
    }else{        
        personas.splice(index_, 1, persona);
    }
    
    renderCards(personas);
    labelValidation.textContent = '';
    form.reset();
});

const renderCards = (list) => {
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
      }
    list.forEach((persona, index) => {
        createCard(persona, index);
    });
}

const createCard = (person, index) =>{
    const divCard = document.createElement('div');
    divCard.className = 'card mt-5 d-flex flex-row';
    const img = document.createElement('img');
    img.setAttribute('src',person.avatar);  
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
    pNombre.textContent = person.nombre;
    pNombre.className = 'card-text col-6';
    const pApellido = document.createElement('p');
    pApellido.textContent = person.apellido; 
    pApellido.className = 'card-text col-6';
    const h5Fecha = document.createElement('h5');
    h5Fecha.className = 'card-text col-6';
    h5Fecha.textContent = 'Fecha';
    const h5Genero = document.createElement('h5');
    h5Genero.className = 'card-text col-6';
    h5Genero.textContent = 'Genero';
    const pFecha = document.createElement('p'); 
    pFecha.textContent = person.fechaNacimiento;
    pFecha.className = 'card-text col-6';
    const pGenero = document.createElement('p'); 
    pGenero.className = 'card-text col-6';
    pGenero.textContent = person.genero;
    const buttonEditar = document.createElement('button');
    buttonEditar.className = 'btn btn-primary btn-sm col-5';
    buttonEditar.setAttribute('data-index',index);
    buttonEditar.textContent = 'Editar'
    const divSpace = document.createElement('div');
    divSpace.className = 'col-2';
    const buttonEliminar = document.createElement('button');
    buttonEliminar.className = 'btn btn-danger btn-sm col-5';
    buttonEliminar.setAttribute('data-index',index);
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
        editCard(e.target);
    })

    buttonEliminar.addEventListener('click', (e) => {
        deleteCard(e.target);        
    })

};

const editCard = (button) => {
    const index = parseInt(button.getAttribute('data-index'));
    index_ = index;
    button.textContent = 'Cancelar';
    persona = personas[index];
    avatar.value = persona.avatar;
    nombre.value = persona.nombre;
    apellido.value = persona.apellido;
    fechaNacimiento.value = persona.fechaNacimiento;
    setRadioCheckedValue(genero,persona.genero);
    pais.value = persona.pais;
    descripcion.value = persona.descripcion;
    labelValidation.textContent = "";
    button.addEventListener('click', (e) => {
        cancelEditCard(e.target);
    })
    edit = true;
}

const cancelEditCard = (button) => {
    button.textContent = 'Editar';
    button.addEventListener('click', (e) => {
        editCard(e.target);
    })
    edit = false;
    form.reset();
}

const deleteCard = (button) => {
    const index = parseInt(button.getAttribute('data-index'));
    personas.splice(index,1);
    renderCards(personas);
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