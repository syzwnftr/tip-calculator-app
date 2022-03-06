const inputBill = document.querySelector('#billAmount');
const inputTip = document.querySelector('#customTip');
const inputNumPeople = document.querySelector('#numOfPeople');
const btnReset = document.querySelector('#btnReset');


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
}

// change btnReset bg-color when input is filled 
function bgColorChange() {
    if(inputBill.value || inputTip.value || inputNumPeople.value) {
        btnReset.classList.add('got-input');
    } else {
        btnReset.classList.remove('got-input');
    }
}

// eventListener for inputBill, trigger when input is filled in input field
inputBill.addEventListener('input', () => {
    numbersDot(inputBill); // use regex to check the input filled by user, only receive numbers and single dot (.)
    bgColorChange(); // change btnReset bg-color when input is filled
    return parseFloat(inputBill.value); //return the value filled by user in decimal 
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
    } else {
        document.querySelector('.not-zero').classList.remove('show');
    }
     
    bgColorChange(); // change btnReset bg-color when input is filled
    return parseInt(inputNumPeople.value); //return the value filled by user in integer 
});

// reset input when page is refresh
function resetInput() {
    inputBill.value = '';
    inputTip.value = '';
    inputNumPeople.value = '';
}


resetInput(); // run the function everytime page is reloaded
    