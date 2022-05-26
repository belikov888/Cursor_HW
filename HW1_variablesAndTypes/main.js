const BREAD = 15.678;
const CHEESE = 123.965;
const BUTTER = 90.2345;

const maxValue = Math.max(BREAD, CHEESE, BUTTER);
console.log(`Максимальна ціна: ${maxValue}`);

const minValue = Math.min(BREAD, CHEESE, BUTTER);
console.log(`Мінімальна ціна: ${minValue}`);

const sumValues = BREAD + CHEESE + BUTTER;
console.log(`Вартість всіх товарів: ${sumValues}`);

const roundValue = Math.floor(BREAD) + Math.floor(CHEESE) + Math.floor(BUTTER);
console.log(`Округлена сума товарів: ${roundValue}`);

const roundValueHundred = Math.round(roundValue / 100)*100;
console.log(`Округлена сума до сотні: ${roundValueHundred}`);

const evenValue = Math.floor(sumValues) % 2 == 0;
console.log(`Сума товарів є парним числом? ${evenValue}`);

const userPay = 500;
const change = userPay - sumValues;
console.log(`Ваша решта: ${change}`);

const mean = Math.round(sumValues / 3 * 100) / 100;
console.log(`Середня вартість товарів: ${mean}`);

const yourSale = Math.round(Math.random() * 100);
console.log(`Ваша знишка складає: ${yourSale} %`);

const sumWithSale = Math.round((sumValues - (sumValues * yourSale / 100)) * 100) / 100;
console.log(`Вартість зі знижкою: ${sumWithSale}`);

const costPrice = sumValues / 2;
const profit = Math.round((sumWithSale - costPrice) * 100) / 100;
console.log(`Чистий прибуток: ${profit}`);