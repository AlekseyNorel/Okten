// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!


//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectangleArea = (a, b) => a * b;
console.log(rectangleArea(3, 2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circleArea = circleRadius => Math.PI * circleRadius ** 2;
console.log(circleArea(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinderArea = (height, radius) => 2 * Math.PI * height * radius;
console.log(cylinderArea(3, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

let printArray = arr => {
    for (const element of arr) {
        console.log(element)
    }
}
printArray([1, 2, 3]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createParagraph = paragraphText => document.write(`<p>${paragraphText}</p>`);
createParagraph('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUl = text => {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
createUl('asd');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createUl2 = (text, liCount) => {
    document.write('<ul>')
    for (let i = 0; i < liCount; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
createUl2('qwerty', 15);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let ulFromArray = arr => {
    document.write('<ul>')
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write('</ul>')
}
ulFromArray([1, 2, 3, true, 'asd']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let printArray2 = mass => {
    for (const element of mass) {
        document.write(`<div>
                            <p>ID - ${element.id}</p>
                            <p>NAME - ${element.name}</p>
                            <p>AGE - ${element.age}</p>
                        </div>`)
    }
}
printArray2([{id: 3, name: 'dima', age: 25}, {id: 2, name: 'vanya', age: 15}, {id: 1, name: 'anya', age: 37}]);

// - створити функцію яка повертає найменьше число з масиву

let lessNumberFromArray = arr => {
    let num = Infinity;

    for (const element of arr) {
        if (num > element) {
            num = element;
        }
    }
    return num;
}
console.log(lessNumberFromArray([1, 2, 3, 4, 55, -22, 6, 7, 9]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = arr => {
    let sum = 0;
    for (const element of arr) {
        sum += element;
    }
    return sum;
}

console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    let temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
    return arr;
}

console.log(swap([1, '2', 3, 7], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency.toLowerCase() === exchangeCurrency.toLowerCase()) {
            return sumUAH/currencyValue.value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
