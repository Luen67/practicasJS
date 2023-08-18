const city = "Estado de México";
const birthYear = 1984;
const myName = "Luis Enrique";
const height = 1.84;
const skyColorBlue = true;
const infoPersonal = "Hola soy " + myName + " y vivo en " + city;
const numberLegsTable = 4;
const birthMonth = "Julio";
const tvSerie  = "How i meet your mother";
const pi = 3.1416;

const compareNumberGreaterThan = (number1, number2) => {
    let result = false;

    if (number1 > number2){
        result = true;
    }
    return result;
}

const number1 = 4;
const number2 = 5;
let result =  compareNumberGreaterThan(number1, number2);
console.log(result);