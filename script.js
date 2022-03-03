const inputBill = document.querySelector('#billAmount');
const inputTip = document.querySelector('#customTip');
const inputNumPeople = document.querySelector('#numOfPeople');

function numbersOnly(input) {
    var num = /[^0-9]/gi;
    input.value = input.value.replace(num, '');
}

inputBill.addEventListener('input', () => {
    numbersOnly(inputBill);
});

inputTip.addEventListener('input', () => {
    numbersOnly(inputTip);
});

inputNumPeople.addEventListener('input', () => {
    numbersOnly(inputNumPeople);
});

// reset input when page is refresh
function resetInput() {
    inputBill.value = '';
    inputTip.value = '';
    inputNumPeople.value = '';
}

resetInput();
    