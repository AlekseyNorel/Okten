// 1. Створити пустий масив та :
let arr = [];
//     a. заповнити його 50 парними числами за допомоги циклу.

for (let i = 1; i < 51; i++) {
    arr[i]=i*2;
}
console.log(arr)

//     b. заповнити його 50 непарними числами за допомоги циклу.

for (let i = 1; i < 51; i++) {
    arr[i]=i*2;
    if (arr[i]%2===0){
        ++arr[i];
    }
}
console.log(arr)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
arr=[];
for (let i = 0; i < 20; i++) {
    arr[i]=Math.floor(Math.random()*(15-1)+1);
}
console.log(arr)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    arr[i]=Math.floor(Math.random()*(732-8)+8);
}
console.log(arr)
console.log('');

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 2; i < arr.length; i+=3) {
    console.log(arr[i])
}
console.log('');

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 2; i < arr.length; i+=3) {
    if (arr[i]%2===0){
        console.log(arr[i])
    }
}
console.log('');

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArr =[];
for (let i = 2; i < arr.length; i+=3) {
    if (arr[i]%2===0){
        console.log(arr[i])
        newArr[newArr.length]=arr[i];
    }
}
console.log('Новий масив', newArr);
console.log('');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

console.log(arr)
for (let i = 0; i < arr.length; i++) {
    if (arr[i+1]%2===0){
        console.log(arr[i])
    }
}
console.log('');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arr2 = [100,250,50,168,120,345,188];
let count =0;
for (const number of arr2) {
    count+=number;
}
console.log(count/(arr2.length))
console.log('');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr3 = [];
let arr3New = [];
for (let i = 0; i < 10; i++) {
    arr3[i]=Math.floor(Math.random()*(15-1)+1);
    arr3New[i]=arr3[i]*5;
}
console.log(arr3);
console.log(arr3New);
console.log('');

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arr4 = [2,'sdftrue',true,2342,'sdfsdf','sdfsdfsd',23423,1,2312,'sdfsdf'];
let arr4New = [];
for (const element of arr4) {
    if (typeof element === 'number'){
        arr4New[arr4New.length]=element;
    }
}
console.log(arr4);
console.log(arr4New);
console.log('');

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    usersWithCities[i] = usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithCities[i]["id"] === citiesWithId[j]["user_id"]) {
            usersWithCities[i].address = citiesWithId[j];
        }
    }
}

console.log(usersWithCities);
console.log('');

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arr5 = [1,2,3,4,5,6,7,8,9,10];
for (const number of arr5) {
    if (number%2===0){
        console.log(number)
    }
}
console.log('');


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr5New=[];
for (const element of arr5) {
    arr5New[arr5New.length]=element;
}
console.log(arr5New);
console.log('');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr6 = [ 'a', 'b', 'c'];
let str ='';
for (let i = 0; i < arr6.length; i++) {
    str+=arr6[i];
}

console.log(str);
console.log('');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let a = 0;
str='';
while (arr6.length>a) {
    str+= arr6[a];
    ++a;
}
console.log(str);
console.log('');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

str ='';
for (const string of arr6) {
    str+= string;
}

console.log(str);
console.log('');