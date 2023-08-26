/*1- Crear una función que recibe un arreglo de strings y un string, 
la función devuelve true si ese string se encuentra en el arreglo y false si no se encuentra */
const strings = ['Hola','Mundo','Pato'];

const existString = (strings, string) => {
    let exist = false;
    for(const item of strings){
        if(item == string){
            exist = true;
            break;
        }        
    }
    return exist;
}

console.log(existString(strings,'Mundo'));

/* 2- Crear una función que parta un arreglo por la mitad y retorne la segunda mitad del arreglo*/
const getSecondHalfOfList = (list) => {
    let secondHalfList = [];
    const size = (list.length/2)%2==1?list.length/2:list.length/2+.5;
    console.log(list.length/2%2);
    for(let index =  size; index < list.length; index++){
        console.log(index);
        secondHalfList.push(list[index]);
    }
    return secondHalfList;
}

const listComplete = [3,4,5,6,7,8];

console.log(getSecondHalfOfList(listComplete));

/*3-Crear una función que recibe un string y regresa false si el string contiene al menos una letra mayúscula  */
const existAtLeastUpperCase = (string) => {
    const regExp = /[A-Z]/;
    if(regExp.test(string)){
        return false;
    }else{
        return true;
    }
}

const phrase = "hola mundo";
console.log(existAtLeastUpperCase(phrase));

/*4-Crear una función que recibe un arreglo de números y devuelve el valor mas grande que 
se encuentra en el arreglo. */

const getNumberGreater = (numbers) => {
    let numberGreater = 0;
    for(const number of numbers){
        if(number > numberGreater){
            numberGreater = number;
        }
    }
    return numberGreater;
}

const numbers = [4,2,7,4,9,1];

console.log(getNumberGreater(numbers));

/*5-Crear una función que reciba un arreglo de números y 
regrese la lista de números pares que se encuentran en el arreglo*/

const getParNumbers = (numbers) => {
    let parNumber = [];
    for(const number of numbers){
        if(number%2 == 0){
            parNumber.push(number);
        }
    }
    return parNumber;
}

const numbersList = [4,2,7,4,9,1];

console.log(getParNumbers(numbersList));

/* 6-Crear una función que pueda generar "n" elementos de la serie de fibonacci donde "n" esta 
dado por el argumento de la función */

const getSerieFibonacci = (number) =>{
    let previousNumber = 0;
    let serie = [0, 1];
    let actualNumber = 1;
    number = number - 2;
    for(let index = 0; index <= number; index++){
        const numberSerie = previousNumber + actualNumber;
        serie.push(numberSerie);
        previousNumber = actualNumber;
        actualNumber = numberSerie;
    }
    return serie;
}

console.log(getSerieFibonacci(4));



/* */


