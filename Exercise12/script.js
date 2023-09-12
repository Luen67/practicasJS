const email = document.querySelector("#email");
const password = document.querySelector("#password");
const buttonCreate = document.querySelector("#btn_create");
const divObject = document.querySelector("#d_object");
const objectUser = {};

buttonCreate.addEventListener('click',(e) =>{
    if(email.value.trim() == "" || password.value.trim() == ""){
        divObject.textContent = "El email y/o password son obligatorios";
    }
    else{        
        divObject.textContent = "";
        createObject();
    }
});

const createObject = () =>{
    if(divObject.childElementCount > 0){
        (document.querySelector("#span_email")).textContent = "email: "+email.value+" ,"; 
        (document.querySelector("#span_password")).textContent = "password: "+password.value+" ,";
    }else{
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');
        const span4 = document.createElement('span');
        span1.textContent = '{';
        span2.setAttribute('id','span_email')
        span2.textContent = "email: '"+email.value+"' ,";    
        span3.setAttribute('id','span_password')
        span3.textContent = "password: '"+password.value+"' ,";
        span4.textContent = '}';
        divObject.appendChild(span1);
        divObject.appendChild(document.createElement('br'));
        divObject.appendChild(span2);
        divObject.appendChild(document.createElement('br'));
        divObject.appendChild(span3);
        divObject.appendChild(document.createElement('br'));
        divObject.appendChild(span4);
    }
    objectUser['email'] = email.value;
    objectUser['password'] = password.value;
    console.log(objectUser);
    buttonCreate.textContent = 'Actualizar Objecto';
}