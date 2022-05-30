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
    
    let fistSimbol = str[0];
    if(fistSimbol != fistSimbol.toUpperCase()){
        fistSimbol = fistSimbol.toUpperCase();
    }

    let result = '';
    for (let n = 1; str[n]; n++) {
    let i = (str[n]);
    if (i != i.toUpperCase()) {
        result = result + i;
    }
    else{
        result = result + i.toLowerCase();
    }
    }
    return fistSimbol + result;
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
    for(let n = 0; str[n]; n++) {
        let letter = str[n];
        if((letter == a) || letter == a.toUpperCase() || letter == a.toLowerCase()){
            result = result + 1;
        }
    }
    return result;
}

function convertCurrency(value) {
    value = String(value);
    let currDol = '';
    let currUan = '';
    let number = '';
    let result;
    value = value.toUpperCase();
    for(let n = 0; value[n]; n++) {
        let letter = value[n];
        if(+letter >= 0){
            number = number + String(letter);
        }
        switch(letter) {
            case '$':
                currDol = true;
                break;
            case 'U':
                currUan = currUan + letter;
                break;
            case 'A':
                currUan = currUan + letter;
                break;
            case 'H':
                currUan = currUan + letter;
                break;
        }
    }

    if(currDol){
        result = +number * 35;
        result = result.toFixed(2);
        return result + ' грн.';
    }
    else {
        if(currUan === 'UAH') {
            result = +number / 35;
            result = result.toFixed(2);
            return result + '$';
        }
       return 'Невідома валюта конвертації';
    }
}

function getRandomPassword(a = 8) {
    let result = '';
    for(let i = 1; i <= a; i++) {
        let n = Math.random() * 10;
        n = Math.floor(n);
        n = n.toFixed();
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
    let inner = '';
    let i;
    rule = rule.replace(/\s+/g, '');
    rule = rule.toUpperCase();
    for(i = 0; rule[i]; i++) {
        let n = rule[i];
        inner = inner + n;
    }
    for(i = i - 1; rule[i]; i--) {
        let n = rule[i];
        result = result + n;
    }
    return result === inner;
}

function deleteDuplicateLetter(rule) {
    rule = rule.toLowerCase();
    rule = rule.replace(/\s+/g, '');
    let result = '';
    let preResult = '';
    for(let i = 0; rule[i]; i++) {
        n = rule[i];
        preResult = n;
        for(let y = 0; rule[y]; y++) {
            let m = rule[y];
            if(y == i){
            }
            else {
                if(m == n){
                    preResult = preResult + n;
                }  
            } 
        }
        if(n == preResult) {
            result = result + preResult;}
    }
    return result;
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