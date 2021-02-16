const btnPassGen = document.querySelector('.btn-passgen'),
    btnPassClear = document.querySelector('.btn-passclear'),
    inputPass = document.querySelector('.input-pass'),
    square = document.querySelector('.far.fa-square'),
    checkSquare = document.querySelector('.far.fa-check-square');

let chars = '0123456789';
chars += 'abcdefghijklmnopqrstvuxyzw';
chars += 'ABCDEFGHIJKLMNOPQRSTVUXYZW';

const symbols = '!@#$%^&()_+?><:{}[]';
const sumCharsSymbols = chars + symbols;

btnPassGen.addEventListener('click', () => {

    checkSquare.style.display === `block` ? outRandomChars(22, sumCharsSymbols) : outRandomChars(22, chars);
});

btnPassClear.addEventListener('click', () => {
    inputPass.value = '';
});

square.addEventListener('click', () => {
    square.style.display = `none`;
    checkSquare.style.display = `block`;
});

checkSquare.addEventListener('click', () => {
    checkSquare.style.display = `none`;
    square.style.display = `block`;
});


function outRandomChars(num, arr) {
    let str = '';
    for (let i = 0; i < num; i++) {

        let x = getRandomIntInclusive(0, arr.length - 1);
        str += arr[x];
        inputPass.value = str;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}