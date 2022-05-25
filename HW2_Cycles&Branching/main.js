let n = + prompt('Введіть число N:', '');

while (Number.isInteger(n) == false) {
    alert('Введіть ціле числове значення N:');
    n = + prompt('Введіть число N', '');
}

console.log(`Значення N дорівнює: ${n}`);

let m = + prompt('Введіть число M:', '');

while ((Number.isInteger(m) == false)) {
    alert('Введіть ціле числове значення M:');
    m = + prompt('Введіть число M', '');
}

while (m < n) {
    alert('Значення M повинно бути більш за число N');
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