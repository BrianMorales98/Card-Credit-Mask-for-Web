const inputCard = document.querySelector('#inputCard');
const inputDate = document.querySelector('#inputDate');
const inputCVV = document.querySelector('#inputCVV');

const maskNumber='####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

let current=''
let cardNumber=[];
let dateNumber=[];
let cvvNumber=[];

inputCard.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
        return;
    }

    e.preventDefault();
    handleInput(maskNumber, e.key, cardNumber)
    inputCard.value = cardNumber.join("");
});

inputDate.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
        return;
    }

    e.preventDefault()
    handleInput(maskDate, e.key, dateNumber);
    inputDate.value = dateNumber.join('');

});

inputCVV.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
        return;
    }

    e.preventDefault();
    handleInput(maskCVV, e.key,     cvvNumber)
    inputCVV.value = cvvNumber.join("");
});




 function handleInput(mask, key, arr){
    let numbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//if backspace its pressed and the array number got more than one character 
// will eliminate the character(backspace functionality).
    if(key ==='Backspace' && arr.length > 0){
        arr.pop();
        return;
    }
// verifying if the key pressed its a valid character of the array on variable "let numbers" 
// and if the array length + 1 its less or equal to mask length.
// verify if the key pressed on a position that will be the - or / 
// will add the - or / and then will continue put the number that was pressed
//simulating the card number input form where to fill 
    if(numbers.includes(key) && arr.length +1 <= mask.length) {
       if(mask[arr.length]=== '-' || mask[arr.length]=== '/') {
         arr.push(mask[arr.length], key);
        }else{
          arr.push(key);
        }
    }
 }