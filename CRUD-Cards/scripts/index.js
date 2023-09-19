const getPersonas = async() => {
    try{
        const response = await fetch(URL_FIREBASE+'.json', {method:'GET'});
        const parsed = await response.json();
        let personas = [];
        for(const key in parsed){
            personas.push({
                'id': key,
                'avatar': parsed[key].avatar,
                'nombre': parsed[key].nombre,
                'apellido': parsed[key].apellido,
                'fechaNacimiento': parsed[key].fechaNacimiento,
                'genero': parsed[key].genero,
                'pais': parsed[key].pais,
                'descripcion': parsed[key].descripcion
            });
        }
        renderCards(personas);
    } catch(error){
        console.log(error);
    }
}

const renderCards = (list) => {
    clearContainer();
    list.forEach((persona, index) => {
        createCard(persona, index);
    });
}

const clearContainer = () => {
    const cardContainers = document.querySelectorAll('.card_container');
    cardContainers.forEach((item) =>{
        while (item.firstChild) {
            item.removeChild(item.firstChild);
          }
    });
}

const createCard = (person, index) =>{
    let cardContainer;
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
    buttonEditar.setAttribute('data-id',person.id);
    buttonEditar.textContent = 'Editar'
    const divSpace = document.createElement('div');
    divSpace.className = 'col-2';
    const buttonEliminar = document.createElement('button');
    buttonEliminar.className = 'btn btn-danger btn-sm col-5';
    buttonEliminar.setAttribute('data-id',person.id);
    buttonEliminar.textContent = 'Eliminar';

    if(index%2 === 0){        
        cardContainer = document.querySelector('#card_container');
    }else{
        cardContainer = document.querySelector('#card_container_2');
    }
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
        window.location.href = '/update/?id='+e.target.getAttribute('data-id');
    })

    buttonEliminar.addEventListener('click', (e) => {
        deleteCard(e.target);        
    })

};

const deleteCard = async (button) => {
    const response = await fetch(URL_FIREBASE+button.getAttribute('data-id')+'.json', {
        method: 'DELETE'
    });
    window.location.reload();
}


getPersonas();