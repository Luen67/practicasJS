const isPalindromo = (string) =>{
    let newString = '';
    for(let index = string.length-1; index >= 0; index--){
        newString = newString + string.substring(index,index+1);
    }
    console.log(newString);
    if(newString == string){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindromo('civic'));



const isMultiplo = (number, listNumbers) => {
    let listNumbersMultiplos = [];
    for(let numberList of listNumbers){
        if(numberList%number == 0){
            listNumbersMultiplos.push(numberList);
        }
    }
    return listNumbersMultiplos;
}

const listNumbers = [1,2,4,5,10,3];
const number = 5;

console.log(isMultiplo(number, listNumbers));



const interseccionList = (listNumbers1, listNumbers2) => {
    let listInterseccion = [];
    for(let number of listNumbers1){
        if(listNumbers2.indexOf(number) > -1){
            if(listInterseccion.indexOf(number) < 0){
                listInterseccion.push(number);
            }
        }
    }
    return listInterseccion;
}

const listNumbers1 = [1,2,3];
const listNumbers2 = [2,3,4];

console.log(interseccionList(listNumbers1, listNumbers2));


const ordenar = (lista) => lista.sort((a,b) => a - b);

console.log(ordenar([1,4,22,2,11]));