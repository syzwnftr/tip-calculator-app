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

const btnTip = document.querySelectorAll('.btn');

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
        inputNumPeople.classList.add('red-outline');
    } else {
        document.querySelector('.not-zero').classList.remove('show');
        inputNumPeople.classList.remove('red-outline');
    }

    bgColorChange(); // change btnReset bg-color when input is filled
    numberOfPeople = parseInt(inputNumPeople.value)
    calcTotal(totalAmount, numberOfPeople); 
});

// btnFive.addEventListener('click', () => {
//     howManyPercent(btnFive);
//     calcTotal(totalAmount, numberOfPeople);

//     btnFive.classList.add('focus');
//     btnTen.classList.remove('focus');
//     btnFifteen.classList.remove('focus');
//     btnTwentyFive.classList.remove('focus');
//     btnFifty.classList.remove('focus');
//     inputTip.classList.remove('customFocus');

// });

// btnTen.addEventListener('click', () => {
//     howManyPercent(btnTen);
//     calcTotal(totalAmount, numberOfPeople);
   
//     btnTen.classList.add('focus');
//     btnFive.classList.remove('focus');
//     btnFifteen.classList.remove('focus');
//     btnTwentyFive.classList.remove('focus');
//     btnFifty.classList.remove('focus');
//     inputTip.classList.remove('customFocus');
   
// });

// btnFifteen.addEventListener('click', () => {
//     howManyPercent(btnFifteen);
//     calcTotal(totalAmount, numberOfPeople);

//     btnFifteen.classList.add('focus');
//     btnFive.classList.remove('focus');
//     btnTen.classList.remove('focus');
//     btnTwentyFive.classList.remove('focus');
//     btnFifty.classList.remove('focus');
//     inputTip.classList.remove('customFocus');
// });

// btnTwentyFive.addEventListener('click', () => {
//     howManyPercent(btnTwentyFive);
//     calcTotal(totalAmount, numberOfPeople);

//     btnTwentyFive.classList.add('focus');
//     btnFive.classList.remove('focus');
//     btnTen.classList.remove('focus');
//     btnFifteen.classList.remove('focus');
//     btnFifty.classList.remove('focus');
//     inputTip.classList.remove('customFocus');
// });

// btnFifty.addEventListener('click', () => {
//     howManyPercent(btnFifty);
//     calcTotal(totalAmount, numberOfPeople);

//     btnFifty.classList.add('focus');
//     btnFive.classList.remove('focus');
//     btnTen.classList.remove('focus');
//     btnFifteen.classList.remove('focus');
//     btnTwentyFive.classList.remove('focus');
//     inputTip.classList.remove('customFocus');
// });

for(let i = 0; i < btnTip.length; i++) {
    btnTip[i].addEventListener('click', () => {
        let n = 0;
        howManyPercent(btnTip[i]);
        calcTotal(totalAmount, numberOfPeople);
    
        while(n < btnTip.length) {
            btnTip[n++].classList.remove('focus');
        }

        btnTip[i].classList.add('focus');

        // if(i === 0) {
        //     btnTen.classList.remove('focus');
        //     btnFifteen.classList.remove('focus');
        //     btnTwentyFive.classList.remove('focus');
        //     btnFifty.classList.remove('focus');
        //     inputTip.classList.remove('customFocus');
        // }

        // if(i === 1) {
        //     btnFive.classList.remove('focus');
        //     btnFifteen.classList.remove('focus');
        //     btnTwentyFive.classList.remove('focus');
        //     btnFifty.classList.remove('focus');
        //     inputTip.classList.remove('customFocus');
        // }

        // if(i === 2) {
        //     btnTen.classList.remove('focus');
        //     btnFive.classList.remove('focus');
        //     btnTwentyFive.classList.remove('focus');
        //     btnFifty.classList.remove('focus');
        //     inputTip.classList.remove('customFocus');
        // }

        // if(i === 3) {
        //     btnTen.classList.remove('focus');
        //     btnFifteen.classList.remove('focus');
        //     btnFive.classList.remove('focus');
        //     btnFifty.classList.remove('focus');
        //     inputTip.classList.remove('customFocus');
        // }

        // if(i === 4) {
        //     btnTen.classList.remove('focus');
        //     btnFifteen.classList.remove('focus');
        //     btnTwentyFive.classList.remove('focus');
        //     btnFive.classList.remove('focus');
        //     inputTip.classList.remove('customFocus');
        // }
       
    });
    
}

inputTip.addEventListener('input', () => {
    howManyPercent(inputTip);
    calcTotal(totalAmount, numberOfPeople);

    inputTip.classList.add('customFocus');
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
    inputTip.classList.remove('customFocus');

    // removes warning text and red outline 
    document.querySelector('.not-zero').classList.remove('show');
    inputNumPeople.classList.remove('red-outline');
}

resetInput(); // run the function everytime page is reloaded
    