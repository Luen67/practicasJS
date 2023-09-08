let counter = 0;
const btnPlus = document.querySelector('#btn-plus');
const btnMinus = document.querySelector('#btn-minus');
const counterLeft = document.querySelector('#counter-left');
const counterCenter = document.querySelector('#counter-center');
const counterRight = document.querySelector('#counter-right');
btnMinus.disabled = true;

const counterFunction = (operator) =>{
    btnMinus.disabled = false;
    if(operator==="+"){
        counter++;
        if(counter < 10){
            counterRight.textContent = (counter.toString()).split("")[0];
            counterCenter.textContent = 0;
            counterLeft.textContent = 0;
        }
        else if(counter >= 10 && counter < 100){
            counterRight.textContent = (counter.toString()).split("")[1];
            counterCenter.textContent = (counter.toString()).split("")[0];
            counterLeft.textContent = 0;
        }
        else if(counter >= 100 && counter < 1000){
            counterRight.textContent = (counter.toString()).split("")[2];
            counterCenter.textContent = (counter.toString()).split("")[1];
            counterLeft.textContent = (counter.toString()).split("")[0];
        }
        else{
            counter--;
            btnPlus.disabled = true;
        }        
    }else{
        counter--;
        if(counter >= 0 && counter < 10){
            counterRight.textContent = (counter.toString()).split("")[0];
            counterCenter.textContent = 0;
            counterLeft.textContent = 0;
        }
        else if(counter >= 10 && counter < 100){
            counterRight.textContent = (counter.toString()).split("")[1];
            counterCenter.textContent = (counter.toString()).split("")[0];
            counterLeft.textContent = 0;
        }
        else if(counter >= 100 && counter < 1000){
            counterRight.textContent = (counter.toString()).split("")[2];
            counterCenter.textContent = (counter.toString()).split("")[1];
            counterLeft.textContent = (counter.toString()).split("")[0];
        }
        else{
            counter++;
            btnMinus.disabled = true;
        }  
    }
};

btnPlus.addEventListener('click',() => {
    counterFunction("+");
});

btnMinus.addEventListener('click',() => {
    counterFunction("-");
});

