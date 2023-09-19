const URL_FIREBASE = 'https://js-7f027-default-rtdb.firebaseio.com/';

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

