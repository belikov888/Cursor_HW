let n = + prompt('Введіть число N:', '');

while (!Number.isInteger(n) || n < 0) {
    alert('Введіть ціле невідємне числове значення N:');
    n = + prompt('Введіть число N: ', '');
}

console.log(`Значення N дорівнює: ${n}`);

let m = + prompt('Введіть число M:', '');

while (!Number.isInteger(m) || m < n) {
    alert('Введіть ціле числове значення більш за N:');
    m = + prompt('Введіть число M', '');
}

console.log(`Значення M дорівнює: ${m}`);

let skipEven = confirm('Чи потрібно пропускати парні числа?');
console.log(`Потрібно пропускати парні числа: ${skipEven}`);

if (skipEven){
    let sum = 0;
    for(let i = n; i <= m; i++) {
        if ((i % 2) != 0){
            sum = sum + i;
        }
    }
    console.log(`Сума без парних чисел дорівнює: ${sum}`);   
}
else{
    let sum = 0;
    for(let i = n; i <= m; i++) {
        sum = sum + i;
    }
    console.log(`Сума чисел дорівнює: ${sum}`);    
}