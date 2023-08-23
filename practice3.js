/*Ejercicio 1*/



const saludo = (name) => {
    if(name==""){
        return "Hola amigo";
    }
    else{
        return "Hola "+ name;
    }
}

console.log(saludo(""));

/*Ejercicio 2*/

const  suma = (number1, number2) => {
    return number1 + number2;
}

console.log(suma(3, 4));

/*Ejercicio 3*/

const esPar = (number) => {
    if(number%2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(esPar(4));


/*Ejercicio 4*/

const convertCelsiusAFahrenheit = (temperature) => {
    return temperature*(9/5) + 32;
}

console.log(convertCelsiusAFahrenheit(3));
