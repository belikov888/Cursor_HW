function getRandomArray(length, min, max) {
    let random;
    let result = [];
    for(let i = 0; i < length; i++) {
        random = Math.random() * (max - min) + min;
        random = random.toFixed();
        result.push(random);
    }
    return result;

}

console.log(`Функція, яка повертає масив випадкових цілих чисел: ${getRandomArray(10, 1, 100)}`);

function getModa(...numbers) { 
    let arr = [];
    let newArr = [];
    for(let i = 0; i < numbers.length; i++) {
        if((numbers[i] ^ 0) !== numbers[i]) {
            continue
        }
        let n = numbers.indexOf(numbers[i]);
        if(n < i){
        } else {
        arr = numbers.filter(number => number == numbers[i]);
        if(arr.length > 1) {
            newArr.push(arr);
        }
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
    let sum = 0;
    let result;
    for(let i = 0; i < numbers.length; i++) {
        if((numbers[i] ^ 0) !== numbers[i]) {
            continue;
        }
        sum = sum + +numbers[i];
    }
    result = sum / numbers.length;
    return result.toFixed(2);
}

console.log(`Функція, яка рахує середнє арифметичне всіх переданих в неї аргументів: ${getAverage(1, 1.2, 3.2, 3, 2, 4, 1, 6, 1, 7, 3, 7, 3, 5)}`);


function getMedian(...numbers) {

    let arr;
    let result = 0;
    arr = numbers.filter(iteam => (iteam ^ 0) === iteam);
    arr.sort((a, b) => {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    });
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
    let evenNumbers = numbers.filter(iteam => iteam % 2 !== 0);
    return evenNumbers;
}

console.log(`Функція, яка фільтрує парні числа передані як аргументи функції: ${filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

function countPositiveNumbers(...numbers) {
    let arr = numbers.filter(iteam => iteam > 0);
    return arr.length;
}

console.log(`Функція, яка порахує кількість чисел більших 0: ${countPositiveNumbers(1, -2, 3, -4, -5, 6, 6)}`);

function getDividedByFive(...numbers) {
    let arr = numbers.filter(iteam => ((iteam / 5) ^ 0) ===  (iteam / 5));
    return arr;
}

console.log(`Функція, яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 5, 77, 57, 87, 23, 2, 56, 3, 2)}`);

function replaceBadWords(string) { 
    const BADWORDS = ['shit', 'fuck'];
    let arr = string.split(' ');
    let indexWord;
    for(let i = 0; i < BADWORDS.length; i++) {
        let amonthStars = BADWORDS[i].length;
        for(let y = 0; y < arr.length; y++) {
            indexWord = arr[y].indexOf(BADWORDS[i]);
            let lengthStar = star => {
                let result = '';
                while(star > 0) {
                    star = star - 1;
                    result = result + '*';
                }
                return result;
            }
            if(indexWord !== -1) {
                arr[y] = arr[y].split('');
                if(indexWord === 0) {
                    arr[y].splice(indexWord, indexWord + amonthStars, lengthStar(amonthStars));
                }
                else {
                    arr[y].splice(indexWord, indexWord + amonthStars - 1, lengthStar(amonthStars));
                }
                arr[y] = arr[y].join('');
            }
        }
    }  
    return arr.join(' ');  
}

console.log(`Функція, яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*): ${replaceBadWords("Are you fucking kidding?")}`);

function divideByThree(word) { 
    let arr = word.toLowerCase().split(' ').join('');
    let result = [];
    if(arr.length > 3) {
        let a = 0;
        while(a < arr.length) {
            let newArr = arr.substring(a, a + 3);
            result.push(newArr.slice());
            a = a + 3;
        }
    }
    else {
        return word;
    }
    return result;
}

console.log(`Функція, яка розбиває кожне слово на умовні склади по 3 букви: ${divideByThree("Commander")}`);

function generateCombinations(word) {
    let count = word.length;
    let arr = word.split('');
    let result = [];
    while(count > 0) {
        for(let i = 0; i < word.length - 1; i++) {
            let newArr = arr.splice(i, 1);
            arr.splice(i + 1, 0, newArr.join(''));
            result.push(arr.slice().join(''));
        }
        count--;
    }
    return result;
}

console.log(`Функція, яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові: ${generateCombinations("abcd")}`);