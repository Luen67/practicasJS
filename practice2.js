/*Ejercicio 1*/

function saludar(name){
    if(name==""){
        return "Hola amigo";
    }
    else{
        return "Hola "+ name;
    }
}

console.log(saludar(""));

/*Ejercicio 2*/

function sumar(number1, number2){
    return number1 + number2;
}

console.log(sumar(3, 4));

/*Ejercicio 3*/

function esPar(number){
    if(number%2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(esPar(4));


/*Ejercicio 4*/

function convertirCelsiusAFahrenheit (temperature){
    return temperature*(9/5) + 32;
}

console.log(convertirCelsiusAFahrenheit(3));
