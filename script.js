const inputBill = document.querySelector('#billAmount');
const inputTip = document.querySelector('#customTip');
const inputNumPeople = document.querySelector('#numOfPeople');
const btnReset = document.querySelector('#btnReset');

// make an input only receives numbers and single dot(.) 
function numbersDot(input) {
    var num = /[^0-9\.]/g;
    input.value = input.value.replace(num, '');
    if(input.value.split('.').length > 2) { // convert string into an array and check if array length is more than 2 
        input.value =input.value.replace(/\.+$/,"");
    }
}

// make an input only receives numbers
function numbersOnly(input) {
    var num = /[^0-9]/g;
    input.value = input.value.replace(num, '');
}

// change btnReset bg-color when input is filled 
function bgColorChange() {
    if(inputBill.value || inputTip.value || inputNumPeople.value) {
        btnReset.classList.add('got-input');
    } else {
        btnReset.classList.remove('got-input');
    }
}

inputBill.addEventListener('input', () => {
    numbersDot(inputBill);
    bgColorChange();
    return parseFloat(inputBill.value);
});

inputTip.addEventListener('input', () => {
    numbersDot(inputTip);
    bgColorChange();
    return parseFloat(inputTip.value);
});

inputNumPeople.addEventListener('input', () => {
    numbersOnly(inputNumPeople);
    bgColorChange();
    return parseInt(inputNumPeople.value);
});

// reset input when page is refresh
function resetInput() {
    inputBill.value = '';
    inputTip.value = '';
    inputNumPeople.value = '';
}


resetInput();
    