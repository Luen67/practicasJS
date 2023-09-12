const form = document.querySelector('#form');
const btnEnviar = document.querySelector('#btn_enviar');
const cardContainer = document.querySelector('#card_container');
const labelValidation = document.querySelector('#validation');

const personas = {

};

btnEnviar.addEventListener('click', () => {
    createCard();
});

const createCard = () =>{
    const avatar = document.querySelector('#avatar');
    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido');
    const fechaNacimiento = document.querySelector('#fecha_nacimiento');
    const genero = document.querySelector('input[name="gender"]:checked');
    const pais = document.querySelector('#pais');
    const descripcion = document.querySelector('#descripcion');

    if(avatar.value === "" || nombre.value === "" || apellido.value === "" || fechaNacimiento.value === "" ||
    genero.value === ""){
        labelValidation.textContent = 'Los campos avatar, nombre, apellido, fecha y genero son obligatorios';
        return;
    }

    labelValidation.textContent = "";
    const divCard = document.createElement('div');
    divCard.className = 'card mt-5 d-flex flex-row';
    const img = document.createElement('img');
    img.setAttribute('src',avatar.value);
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
    pNombre.textContent = nombre.value;
    pNombre.className = 'card-text col-6';
    const pApellido = document.createElement('p');
    pApellido.textContent = apellido.value;
    pApellido.className = 'card-text col-6';
    const h5Fecha = document.createElement('h5');
    h5Fecha.className = 'card-text col-6';
    h5Fecha.textContent = 'Fecha';
    const h5Genero = document.createElement('h5');
    h5Genero.className = 'card-text col-6';
    h5Genero.textContent = 'Genero';
    const pFecha = document.createElement('p');
    pFecha.textContent = fechaNacimiento.value;
    pFecha.className = 'card-text col-6';
    const pGenero = document.createElement('p');
    pGenero.className = 'card-text col-6';
    pGenero.textContent = genero.value;
    const buttonEditar = document.createElement('button');
    buttonEditar.className = 'btn btn-primary btn-sm col-5';
    buttonEditar.textContent = 'Editar'
    const divSpace = document.createElement('div');
    divSpace.className = 'col-2';
    const buttonEliminar = document.createElement('button');
    buttonEliminar.className = 'btn btn-danger btn-sm col-5';
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

    form.reset();
};

const findPersona = (persona) => {

}

const editCard = () => {

}

const updateCard = () => {
    
}