const inputBill = document.querySelector('#billAmount');

inputBill.addEventListener('input', () => {
    numbersOnly(inputBill);
});

function numbersOnly(input) {
    var num = /[^0-9]/gi;
    input.value = input.value.replace(num, '');
}

    