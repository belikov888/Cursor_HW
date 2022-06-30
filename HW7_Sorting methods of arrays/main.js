function getRandomArray(length, min, max) {
    const result = [];
    for(let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (max - min) + min));
    }
    return result;

}

console.log(`Функція, яка повертає масив випадкових цілих чисел: ${getRandomArray(10, 1, 100)}`);

function getModa(...numbers) { 
    const newArr = [];
    for(let i = 0; i < numbers.length; i++) {
        const arr = numbers.filter(number => number == numbers[i]);
        if((numbers[i] ^ 0) !== numbers[i]) {
            continue
        }
        let n = numbers.indexOf(numbers[i]);
        if(!(n < i) && arr.length > 1){
                newArr.push(arr);
        } 
    }
    let arrW = [[0]];
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i].length > arrW[0].length) {
            arrW = [];
            arrW.push(newArr[i]);
        }
        else if(newArr[i].length == arrW[0].length) {
            arrW.push(newArr[i]);
        }

    }
    let result = arrW.map(item => item.slice(0, 1).join());
    return result;
}

console.log(`Функція, яка вираховує моду всіх переданих в неї аргументів: ${getModa(1, 1.2, 3.2, 3, 2, 4, 1, 6, 1, 7, 3, 7, 3, 5)}`);   

function getAverage(...numbers) { 
    let result;
    let arr = [];
    const initialValue = 0;
    arr = numbers.filter(number => (number ^ 0) == number);
    const sum = arr.reduce((a, b) => a + b, initialValue);  
    result = sum / arr.length;
    return result.toFixed(2);
}

console.log(`Функція, яка рахує середнє арифметичне всіх переданих в неї аргументів: ${getAverage(1, 1.2, 3.2, 3, 2, 4, 1, 6, 1, 7, 3, 7, 3, 5)}`);


function getMedian(...numbers) {

    let arr;
    let result = 0;
    arr = numbers.filter(iteam => (iteam ^ 0) === iteam);
    arr.sort((a, b) => a - b);
    if(arr.length % 2 == 0) {
        result = ((arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2);
    }
    else {
        result = arr[Math.floor(arr.length / 2)];
    }
    return result;
    
}

console.log(`Функція, яка рахує медіану всіх переданих в неї аргументів: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

function filterEvenNumbers(...numbers) {
    return numbers.filter(iteam => iteam % 2 !== 0);;
}

console.log(`Функція, яка фільтрує парні числа передані як аргументи функції: ${filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

function countPositiveNumbers(...numbers) {
    return numbers.filter(iteam => iteam > 0).length;
}

console.log(`Функція, яка порахує кількість чисел більших 0: ${countPositiveNumbers(1, -2, 3, -4, -5, 6, 6)}`);

function getDividedByFive(...numbers) {
    return numbers.filter(num => num % 5 === 0);
    
}

console.log(`Функція, яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 5, 77, 57, 87, 23, 2, 56, 3, 2)}`);

function replaceBadWords(string) { 
    const BADWORDS = ['shit', 'fuck'];
    for (let i = 0; i < BADWORDS.length; i++) {
        while (string.includes(BADWORDS[i])) {
            string = string.replace(BADWORDS[i], '*'.repeat(BADWORDS[i].length))
        }
    }
    return string
}

console.log(`Функція, яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*): ${replaceBadWords("Are you fucking kidding?")}`);

function divideByThree(word) { 
    const arr = word.toLowerCase().split(' ').join('');
    const result = [];
    if(arr.length <= 3) {
        return word;
    } 
    let a = 0;
    while(a < arr.length) {
        let newArr = arr.substring(a, a + 3);
        result.push(newArr.slice());
        a = a + 3;
    }
    return result;
}

console.log(`Функція, яка розбиває кожне слово на умовні склади по 3 букви: ${divideByThree("Commander")}`);

function generateCombinations(word) { 
    const result = [];
        if (word.length < 2) return [word];
            
        for (let i = 0; i < word.length; i++) {
            let getCombination = generateCombinations(word.slice(0, i) + word.slice(i+1, word.length));
            
            for (n = 0; n < getCombination.length; n++) {
                result.push(word[i] + getCombination[n]);
            }
        }
    
        return result.filter((vallue, index, arr) => arr.indexOf(vallue) === index)
    }

console.log(`Функція, яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові: ${generateCombinations("abcd")}`);