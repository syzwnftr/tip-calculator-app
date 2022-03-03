const inputBill = document.querySelector('#billAmount');
const inputTip = document.querySelector('#customTip');
const inputNumPeople = document.querySelector('#numOfPeople');

// make an input only receives numbers and single dot(.) 
function numbersDot(input) {
    var num = /[^0-9\.]/g;
    input.value = input.value.replace(num, '');
    if(input.value.split('.').length > 2) {
        input.value =input.value.replace(/\.+$/,"");
    }
}

// make an input only receives numbers
function numbersOnly(input) {
    var num = /[^0-9]/g;
    input.value = input.value.replace(num, '');
}

inputBill.addEventListener('input', () => {
    numbersDot(inputBill);
    return parseFloat(inputBill.value);
});

inputTip.addEventListener('input', () => {
    numbersDot(inputTip);
    return parseFloat(inputTip.value);
});

inputNumPeople.addEventListener('input', () => {
    numbersOnly(inputNumPeople);
    return parseInt(inputNumPeople.value);
});

// reset input when page is refresh
function resetInput() {
    inputBill.value = '';
    inputTip.value = '';
    inputNumPeople.value = '';
}

resetInput();
    