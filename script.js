const inputBill = document.querySelector('#billAmount');
const inputTip = document.querySelector('#customTip');
const inputNumPeople = document.querySelector('#numOfPeople');
const btnReset = document.querySelector('#btnReset');

const btnsTip = document.querySelectorAll('.btn');

let totalAmount, tipPercent, numberOfPeople;

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
        btnReset.disabled = false; //enabled button
    } else {
        btnReset.classList.remove('got-input');
        btnReset.disabled = true; // disabled button (button can't be selected, clicked on)
    }
}

// converting string to number
function howManyPercent(btn) {
    tipPercent = parseInt(btn.value)
}

// calculate tip amount per person and total to be paid per person
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

// eventListener for inputNumPeople, trigger when input is filled in input field
inputNumPeople.addEventListener('input', () => {
    numbersOnly(inputNumPeople); // use regex to check the input filled by user, only receive numbers

    if(inputNumPeople.value === '0') {
        document.querySelector('.not-zero').classList.add('show');
        inputNumPeople.classList.add('red-outline');
    } else {
        document.querySelector('.not-zero').classList.remove('show');
        inputNumPeople.classList.remove('red-outline');
    }

    bgColorChange(); // change btnReset bg-color when input is filled
    numberOfPeople = parseInt(inputNumPeople.value)
    calcTotal(totalAmount, numberOfPeople); 
});

for(let i = 0; i < btnsTip.length; i++) {
    btnsTip[i].addEventListener('click', () => {
        howManyPercent(btnsTip[i]);
        calcTotal(totalAmount, numberOfPeople);
        
        btnsTip.forEach(btn => btn.classList.remove('focus')); // removes .focus class from all btnsTip
        inputTip.value = '';
        inputTip.classList.remove('customFocus');
        btnsTip[i].classList.add('focus');  // add .focus class to current btnsTip
    });   
}

// eventListener for inputTip, trigger when input is filled in input field
inputTip.addEventListener('input', () => {
    numbersDot(inputTip); // use regex to check the input filled by user, only receive numbers and single dot (.)
    bgColorChange(); // change btnReset bg-color when input is filled
    howManyPercent(inputTip);
    calcTotal(totalAmount, numberOfPeople);

    btnsTip.forEach(btn => btn.classList.remove('focus'));
    inputTip.classList.add('customFocus');
});

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
    
    btnsTip.forEach(btn => btn.classList.remove('focus')); // removes .focus class from all btnsTip
    inputTip.classList.remove('customFocus');

    // removes warning text and red outline 
    document.querySelector('.not-zero').classList.remove('show');
    inputNumPeople.classList.remove('red-outline');
}

resetInput(); // run the function everytime page is reloaded
    