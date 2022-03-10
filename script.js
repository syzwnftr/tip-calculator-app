const inputBill = document.querySelector('#billAmount');
const inputTip = document.querySelector('#customTip');
const inputNumPeople = document.querySelector('#numOfPeople');
const btnReset = document.querySelector('#btnReset');

let totalAmount, tipPercent, numberOfPeople;

const btnFive = document.getElementById('btn5');
const btnTen = document.getElementById('btn10');
const btnFifteen = document.getElementById('btn15');
const btnTwentyFive = document.getElementById('btn25');
const btnFifty = document.getElementById('btn50');
const customTip = document.getElementById('customTip');


// make an input only receives numbers and single dot(.) 
function numbersDot(input) {
    var num = /[^0-9\.]/g;
    input.value = input.value.replace(num, ''); // won't accept any input that aren't numbers and dot
    if(input.value.split('.').length > 2) { // convert string into an array and check if array length is more than 2 
        input.value =input.value.replace(/\.+$/,""); // only accept one dot
    }
}

// make an input only receives numbers
function numbersOnly(input) {
    var num = /[^0-9]/g;
    input.value = input.value.replace(num, ''); // won't accept any input that aren't numbers

    if(input.value.split('').length > 1 && input.value[0] === '0') {
        input.value = input.value.replace(/\d+$/,"0");  // only accept 0 if 0 is the first number been filled in
    }
}

// change btnReset bg-color when input is filled 
function bgColorChange() {
    if(inputBill.value || inputTip.value || inputNumPeople.value) {
        btnReset.classList.add('got-input');
    } else {
        btnReset.classList.remove('got-input');
    }
}

function howManyPercent(btn) {
    tipPercent = parseInt(btn.value)
}

function calcTotal(total, numberOfPeople) {
    let tipAmountTotal = total * (tipPercent / 100)
    let amountPerPerson = (total + tipAmountTotal) / numberOfPeople;
    let tipPerPerson = tipAmountTotal / numberOfPeople;
    
    if(totalAmount === undefined || numberOfPeople === undefined || isNaN(amountPerPerson)) {
        document.getElementById('tipAmount').textContent ='$0.00';
        document.getElementById('totalAmount').textContent ='$0.00';
    } else {
        document.getElementById('tipAmount').textContent =`$${tipPerPerson.toFixed(2)}`;
        document.getElementById('totalAmount').textContent =`$${amountPerPerson.toFixed(2)}`;
    }
}

// eventListener for inputBill, trigger when input is filled in input field
inputBill.addEventListener('input', () => {
    numbersDot(inputBill); // use regex to check the input filled by user, only receive numbers and single dot (.)
    bgColorChange(); // change btnReset bg-color when input is filled
    totalAmount = parseFloat(inputBill.value);

    calcTotal(totalAmount, numberOfPeople); 
});

// eventListener for inputTip, trigger when input is filled in input field
inputTip.addEventListener('input', () => {
    numbersDot(inputTip); // use regex to check the input filled by user, only receive numbers and single dot (.)
    bgColorChange(); // change btnReset bg-color when input is filled
    return parseFloat(inputTip.value); //return the value filled by user in decimal 
});

// eventListener for inputNumPeople, trigger when input is filled in input field
inputNumPeople.addEventListener('input', () => {
    numbersOnly(inputNumPeople); // use regex to check the input filled by user, only receive numbers

    if(inputNumPeople.value === '0') {
        document.querySelector('.not-zero').classList.add('show');
        inputNumPeople.classList.add('red-outline')
    } else {
        document.querySelector('.not-zero').classList.remove('show');
        inputNumPeople.classList.remove('red-outline')
    }

    bgColorChange(); // change btnReset bg-color when input is filled
    numberOfPeople = parseInt(inputNumPeople.value)
    calcTotal(totalAmount, numberOfPeople); 
});

btnFive.addEventListener('click', () => {
    howManyPercent(btnFive);
    calcTotal(totalAmount, numberOfPeople);

    btnFive.classList.add('focus');
    btnTen.classList.remove('focus');
    btnFifteen.classList.remove('focus');
    btnTwentyFive.classList.remove('focus');
    btnFifty.classList.remove('focus');
    customTip.classList.remove('customFocus');

});

btnTen.addEventListener('click', () => {
    howManyPercent(btnTen);
    calcTotal(totalAmount, numberOfPeople);
   
    btnTen.classList.add('focus');
    btnFive.classList.remove('focus');
    btnFifteen.classList.remove('focus');
    btnTwentyFive.classList.remove('focus');
    btnFifty.classList.remove('focus');
    customTip.classList.remove('customFocus');
   
});

btnFifteen.addEventListener('click', () => {
    howManyPercent(btnFifteen);
    calcTotal(totalAmount, numberOfPeople);

    btnFifteen.classList.add('focus');
    btnFive.classList.remove('focus');
    btnTen.classList.remove('focus');
    btnTwentyFive.classList.remove('focus');
    btnFifty.classList.remove('focus');
    customTip.classList.remove('customFocus');
});

btnTwentyFive.addEventListener('click', () => {
    howManyPercent(btnTwentyFive);
    calcTotal(totalAmount, numberOfPeople);

    btnTwentyFive.classList.add('focus');
    btnFive.classList.remove('focus');
    btnTen.classList.remove('focus');
    btnFifteen.classList.remove('focus');
    btnFifty.classList.remove('focus');
    customTip.classList.remove('customFocus');
});

btnFifty.addEventListener('click', () => {
    howManyPercent(btnFifty);
    calcTotal(totalAmount, numberOfPeople);

    btnFifty.classList.add('focus');
    btnFive.classList.remove('focus');
    btnTen.classList.remove('focus');
    btnFifteen.classList.remove('focus');
    btnTwentyFive.classList.remove('focus');
    customTip.classList.remove('customFocus');
});

customTip.addEventListener('input', () => {
    howManyPercent(customTip);
    calcTotal(totalAmount, numberOfPeople);

    customTip.classList.add('customFocus');
    btnFive.classList.remove('focus');
    btnTen.classList.remove('focus');
    btnFifteen.classList.remove('focus');
    btnTwentyFive.classList.remove('focus');
    btnFifty.classList.remove('focus');
})

// reset input when btnReset is clicked
btnReset.addEventListener('click', () => {
    resetInput();
    bgColorChange();
});

// reset input when page is refresh
function resetInput() {
    inputBill.value = '';
    inputTip.value = '';
    inputNumPeople.value = '';
    
    tipPercent = undefined;
    numberOfPeople = undefined;

    document.getElementById('tipAmount').textContent ='$0.00';
    document.getElementById('totalAmount').textContent ='$0.00';

    btnFive.classList.remove('focus');
    btnTen.classList.remove('focus');
    btnFifteen.classList.remove('focus');
    btnTwentyFive.classList.remove('focus');
    btnFifty.classList.remove('focus');
}

resetInput(); // run the function everytime page is reloaded
    