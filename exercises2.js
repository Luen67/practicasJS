const number = 1;

if(number > 0){
    console.log("Es positivo");
}else if(number < 0){
    console.log("Es negativo");
}else if(number === 0){
    console.log("Es cero");
}

if(number%2 === 0){
    console.log("Es número par");
}else{
    console.log("Es número impar");
}

const calificacion = 100;

if(calificacion >= 90){
    console.log("A");
}else if(calificacion >= 80){
    console.log("B");
}else if(calificacion >= 70){
    console.log("C");
}else if(calificacion >= 60){
    console.log("D");
}