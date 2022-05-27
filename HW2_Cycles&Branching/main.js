let n;
let m;
let skipEven;

n = + prompt('Введіть число N:', '');

while (!Number.isInteger(n) || n < 0) {
    alert('Введіть ціле невідємне числове значення N:');
    n = + prompt('Введіть число N: ', '');
}

console.log(`Значення N дорівнює: ${n}`);

m = + prompt('Введіть число M:', '');

while (!Number.isInteger(m) || m <= n) {
    alert('Введіть ціле числове значення більш за N:');
    m = + prompt('Введіть число M', '');
}

console.log(`Значення M дорівнює: ${m}`);

skipEven = confirm('Чи потрібно пропускати парні числа?');
console.log(`Потрібно пропускати парні числа: ${skipEven}`);

let sum = 0;
for (let i = n; i <= m; i++) {
    if (skipEven && i % 2 == 0) {
       
    }
    else {
        sum = sum + i;
    }
}
console.log(`Сума чисел дорівнює: ${sum}`);