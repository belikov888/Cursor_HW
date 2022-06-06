function getMaxDigit(number) {
    number = String(number);
    let result = 0;
    for (let n = 0; number[n]; n++) {
            i = (+number[n]);
            if (i > result) {
                result = i;
            }
    }
    return result;
}

function getDegreeNumber(a, n) {
    let result = a;
    for(let i = 1; i < n; i++) {
        result = result * a;
    }
    return result;
}

function getUpperCase(str) {
    let fistSimbol = str[0].toUpperCase();
    let otherSimbols = str.substring(1).toLowerCase();
    return fistSimbol + otherSimbols;
}

function getSumWithTax(sum) {
    let tax = 18 + 1.5;
    result = sum - (sum * tax / 100);
    return result;
}

function getRandomNumber(a, b) {
    let result = Math.random() * (b - a) + a;
    return result.toFixed();
}

function countLetter(a, str) {
    let result = 0;
    str = str.toLowerCase();
    for(let n = 0; str[n]; n++) {
        let letter = str[n];
        if(letter == a){
            result = result + 1;
        }
    }
    return result;
}

function convertCurrency(value) {
    value = String(value);
    let number = '';
    let result;
    value = value.toUpperCase();

    for(let i = 0; value[i]; i++) {
        let letter = value[i];
        if(+letter >= 0){
            number = number + String(letter);
        }
    }

    if(value.substring(value.length - 3 ) == 'UAH') {
        result = +number / 35;
        result = result.toFixed(2);
        return result + '$';
    }
    else if(value.substring(value.length - 1 ) == '$') {
        result = +number * 35;
        result = result.toFixed(2);
        return result + ' грн.';
    }
    else {
        return 'Невідома валюта конвертації';
    }
}

function getRandomPassword(a = 8) {
    let result = '';
    for(let i = 1; i <= a; i++) {
        let n = Math.random() * 10;
        n = Math.floor(n);
        result = result + n;
    }
    return result;
}

function deleteLetters(litter, str) {
    let result = '';
    for(let i = 0; str[i]; i++) {
        let n = str[i];
        if(n != litter && n != litter.toUpperCase() && n != litter.toLowerCase()) {
            result = result + n;
        }
    }
    return result;
}

function isPalyndrom(rule) { 
    let result = '';
    rule = rule.toLowerCase().split(' ').join('');
    result = rule.split('').reverse().join('');
    return rule === result;
}

function deleteDuplicateLetter(rule) {
    rule = rule.toLowerCase();
    rule = rule.split(' ').join('');
    let arr = rule;
    for(let i = 0; i < rule.length; i++) {
        let idSimbol = rule.lastIndexOf(rule[i]);
        if(idSimbol !== i) {
            arr = arr.split('').filter(iteam => iteam !== rule[i]).join('');
        }
    }
    return arr;
}

console.log(`Функція №1 отримує будь-яке число та виводить найбільшу цифру в цьому числі:  ${getMaxDigit(1236)}`);
console.log(`Функція №2 визначає ступінь числа:  ${getDegreeNumber(2, 3)}`);
console.log(`Функція №3 форматує ім'я, роблячи першу букву великою:  ${getUpperCase('вЛаД')}`);
console.log(`Функція №4 вираховує суму, що залишається після оплати податку:  ${getSumWithTax(1000)}`);
console.log(`Функція №5 повертає випадкове ціле число в діапазоні:  ${getRandomNumber(1, 10)}`);
console.log(`Функція №6 рахує скільки разів певна буква повторюється в слові:  ${countLetter('а', 'Асталавіста')}`);
console.log(`Функція №7 конвертує долари в гривні та навпаки:  ${convertCurrency('2500UaH')}`);
console.log(`Функція №8 генерації випадкового паролю:  ${getRandomPassword(12)}`);
console.log(`Функція №9 видаляє всі букви з речення:  ${deleteLetters('a', 'blablabla')}`);
console.log(`Функція №10 перевіряє, чи є слово паліндромом:  ${isPalyndrom('Я несу гусеня')}`);
console.log(`Функція №11 видалить з речення букви, які зустрічаються більше 1 разу:  ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}`);