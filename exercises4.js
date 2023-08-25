
/*Tniendo un numero de tarjeta 2345 0967 0938 8943 debemos mostrarle los ultimos 4 digitos al usuario, utiliza los metodos de string para resolverlo
'2345 0967 0938 8943'
'************8943'*/

const numero_tarjeta = '2345 0967 0938 8943';

const numero_oculto = numero_tarjeta.slice(numero_tarjeta.length-4, numero_tarjeta.length).padStart(16,'*');

console.log(numero_oculto);

/*Crear una funcion que reciba dos parametros, el primero sera un caracter que se busque en el parametro 2 y lo reemplaze con una X, retorna el resultado del string */
const findReplace = (char_replace, string) => {
    const string_replaced = string.replaceAll(char_replace,'X');

    return string_replaced;
}

console.log(findReplace('H','Hola'))

/*Crear una funcion que convierta un string en 2 al partir por la mitad el string originial retorna el resultado, usando los metodos de string*/

const cutString = (string) => {
    const size = string.length;
    const s = string.slice(0, size/2).concat('${}').concat(string.slice(size/2, string.length));
    const strings = s.split('${}');
    return strings;
}

console.log(cutString('Hola'));