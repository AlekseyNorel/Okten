// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr1 = [1,2,3,'as',true,6,7,8,9,10];
for (const arr1Element of arr1) {
    console.log(arr1Element);
}


//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: 'book1 title',
    pageCount: 320,
    genre: 'book1 genre',
}
const book2 = {
    title: 'book2 title',
    pageCount: 260,
    genre: 'book2 genre',
}
const book3 = {
    title: 'book3 title',
    pageCount: 180,
    genre: 'book3 genre',
}

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const book4 = {
    title: 'book4 title',
    pageCount: 320,
    genre: 'book4 genre',
    authors: {
        name: 'Michael Ross',
        age: 25,
    }
}
const book5 = {
    title: 'book5 title',
    pageCount: 260,
    genre: 'book5 genre',
    authors: {
        name: 'Louis Litt',
        age: 35,
    }
}
const book6 = {
    title: 'book6 title',
    pageCount: 180,
    genre: 'book6 genre',
    authors: {
        name: 'Harvey Specter',
        age: 25,
    }
}

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const mass = [
    {
        name: 'John',
        username: 'asd',
        password: 12345,
    },
    {
        name: 'Bill',
        username: 'dfhdfh',
        password: 234235,
    },
    {
        name: 'Tim',
        username: 'afasnzx ',
        password: 123236111,
    },
    {
        name: 'Tom',
        username: 'sdfgsdfg',
        password: 4613131,
    },
    {
        name: 'Glen',
        username: 'dfhdbxz',
        password: 1243154135844,
    },
    {
        name: 'Simon',
        username: 'dsfhdfsd',
        password: 74313411,
    },
    {
        name: 'Harold',
        username: 'adbhdfbd',
        password: 486413413,
    },
    {
        name: 'Arnold',
        username: 'asfgnsgfdd',
        password: 444555,
    },
    {
        name: 'Dan',
        username: 'adfbdb',
        password: 16652255,
    },
    {
        name: 'Frank',
        username: 'sfgbngbn',
        password: 15558885,
    }
];

for (const mass1 of mass) {
    console.log('Password:',mass1.password);
}

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let m = -3;
if  (m!==0) {
    console.log('Вірно');
} else {
    console.log('Не вірно')
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = 33;
if (time<15) {
    console.log('1 quoter')
} else if (time>=15&&time<30) {
    console.log('2 quoter');
} else if (time>=30&&time<45) {
    console.log('3 quoter')
} else if (time>=45&&time<60) {
    console.log('4 quoter')
} else {
    console.log('incorrect number')
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

const day = 13;
if (day<=10){
    console.log('1 декада');
}else if (day<=20){
    console.log('2 декада') ;
}else if(day<=31){
    console.log('3 декада');
}else{
    console.log('incorrect number');
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

const i = 2;
switch (i){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Incorrect number')
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

const a = 2;
const b=3;
if (a===b){
    console.log('числа рівні');
} else if (a>b){
    console.log(a);
} else if (a<b){
    console.log(b);
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = false;
if (x===false||x===0||x===-0||x===0n||x===''||x===""||x===``||x===null||x===undefined){
    x="default";
    console.log(x);
}

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер")
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log("Супер")
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log("Супер")
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log("Супер")
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log("Супер")
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log("Супер")
}


