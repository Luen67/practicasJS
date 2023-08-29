/*Una funcion que cambie las minusculas por mayusculas de una cadena dada pero solo las letras en posición impar*/
const convertUpperCaseLetterImpar = (string) => {
    let impar = 1;
    let newString = '';
    for(let index = 0; index < string.length; index++){
        if(impar==1 && string.substring(index,index+1) != ' '){
                newString = newString + string.substring(index,index+1).toUpperCase();
            impar = 0;
        }else{
            newString = newString + string.substring(index,index+1);
            impar = 1;
        }
    }
    return newString;

}

console.log(convertUpperCaseLetterImpar('prueba hol'));



/*función para invertir un string ingresado*/
const invertString = (string) => {
    let newString = '';
    for(let index = string.length-1; index >= 0; index--){
        newString = newString + string.substring(index-1,index);
    }
    return newString;
}

console.log(invertString('prueba'));



/*Funcipn que indica true si la palabra usa todas las vocales y false si no es asi*/
const existAllVocal = (string) =>  {
    if(string.includes('a') && string.includes('e') && string.includes('i') && string.includes('o') && string.includes('u')){
        return true;
    }
    else{
        return false;
    }
    
}

console.log(existAllVocal('murcielago'));


/*crea una funcion llamada sayHi que recibe como parametro un nombre y te salude*/
const hourGreeting = (hour) => {
    let greeting='';
    if(hour <= 12){
        greeting = 'Buenos dias';
    }else if(hour < 19){
        greeting = 'Buenas tardes';
    }else{
        greeting = 'Buenas noches';
    }
    return greeting;
}


/*Crea una funcion llamada executor que reciba como primer parametro una funcion y como segundo 
parametro un string y que en su cuerpo ejecute la funcion recibida y pase como parametro el segundo parametro recibido en esta funcion*/

const sayHi = (hourGreeting,name,hour) => {
    const greeting = hourGreeting(hour)+' '+name;
    return greeting;
};



/*Ejecuta la funcion executor anterior pasando como primer parametro la funcion sayHi y como segundo parametro un string con tu nombre*/
console.log(sayHi(hourGreeting,'Luis',8));
