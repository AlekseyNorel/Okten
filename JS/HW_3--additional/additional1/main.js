// --створити масив з:
//     - з 5 числових значень

const arr1 = [1, 2, 3, 4, 5];

// - з 5 стічкових значень

const arr2 = ['a', 'b', 'c', 'd', 'e'];


// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


const arr3 = ['a', 'b', 'c', true, false];
for (const arr3Element of arr3) {
    console.log(arr3Element);
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr4 = [];
for (let i = 0; i < 5; i++) {
    arr4[arr4.length] = 'asd';
}
console.log(arr4);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
let count = 0;
while (count < arr5.length) {
    console.log(arr5[count]);
    ++count;
}

//     2. перебрати його циклом for

for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
}
console.log('')
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
count = 0;
while (count < arr5.length) {
    if (count % 2 !== 0) {
        console.log(arr5[count]);
    }
    ++count;
}
console.log('')
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arr5.length; i++) {
    if (i % 2 !== 0) {
        console.log(arr5[i]);
    }
}
console.log('')
// 5. перебрати циклом while та вивести  числа тільки парні  значення

count = 0;
while (count < arr5.length) {
    if (count % 2 === 0) {
        console.log(arr5[count]);
    }
    ++count;
}
console.log('')


// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arr5.length; i++) {
    if (i % 2 === 0) {
        console.log(arr5[i]);
    }
}
console.log('')

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 3 === 0) {
        arr5[i] = 'okten';
    }
}
console.log(arr5);

// 8. вивести масив в зворотньому порядку.

for (let i = arr5.length - 1; i >= 0; i--) {
    console.log(arr5[i]);
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log('')
let arr7 = ['adfg', 'aasdf', 'aasg', 'aghm', 'aSDF', 'andhn', 'aDFf', 'afmn', 'azg', 'aki'];
for (const string of arr7) {
    console.log(string);
}
console.log('')
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

console.log('')
let arr8 = ['adfg', 3123, 'aasg', 'aghm', 'aSDF', true, 'aDFf', 'afmn', 'azg', ['asfsf', 'asdasd']];
for (const string of arr8) {
    console.log(string);
}
console.log('')

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

console.log('')
let arr9 = ['adfg', 3123, false, 'aghm', 'aSDF', true, 'aDFf', 'afmn', 'azg'];
for (const string of arr9) {
    if (typeof string === "boolean") {
        console.log(string);
    }
}
console.log('')
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

console.log('')
let arr10 = ['adfg', 3123, false, 'aghm', 'aSDF', 789, true, 'aDFf', 'afmn', 'azg', 65];
for (const string of arr10) {
    if (typeof string === "number") {
        console.log(string);
    }
}
console.log('')

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

console.log('')
let arr11 = ['adfg', 3123, false, 'aghm', 'aSDF', 789, true, 'aDFf', 'afmn', 'azg', 65];
for (const string of arr11) {
    if (typeof string === "string") {
        console.log(string);
    }
}
console.log('')


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(`крок № ${i}`);
    document.write(`крок № ${i} `);
}
document.write('<br>')
console.log('')

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(`крок № ${i}`);
    document.write(`крок № ${i} `);
}
document.write('<br>')
console.log('')

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log(`крок № ${i}`);
    document.write(`крок № ${i} `);
}
document.write('<br>')
console.log('')

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0 && i !== 0) {
        console.log(`крок № ${i}`);
        document.write(`крок № ${i} `);
    }

}
document.write('<br>')
console.log('')

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(`крок № ${i}`);
        document.write(`крок № ${i} `);
    }

}
document.write('<br>')
console.log('')

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: "Підводний світ",
        pageCount: 200,
        authors: ["Джон Сміт", "Марія Джонсон"],
        genres: ["пригоди", "фантастика"]
    },
    {
        title: "Таємниці древньої печери",
        pageCount: 350,
        authors: ["Сара Томпсон"],
        genres: ["містика", "пригоди"]
    },
    {
        title: "Кулінарна магія",
        pageCount: 150,
        authors: ["Емма Вільсон"],
        genres: ["кулінарія", "фантазія"]
    },
    {
        title: "Хроніки драконів",
        pageCount: 400,
        authors: ["Девід Рейнольдс"],
        genres: ["фентезі", "пригоди", "містика"]
    },
    {
        title: "Кодерські пригоди",
        pageCount: 250,
        authors: ["Аліса Лінкольн"],
        genres: ["пригоди", "наукова фантастика"]
    },
    {
        title: "Таємниці космосу",
        pageCount: 300,
        authors: ["Роберт Сміт"],
        genres: ["наукова фантастика", "пригоди"]
    },
    {
        title: "Лабіринти магії",
        pageCount: 180,
        authors: ["Емілі Браун"],
        genres: ["фентезі", "містика"]
    },
    {
        title: "Культиватор імперії",
        pageCount: 500,
        authors: ["Віктор Чен"],
        genres: ["фентезі", "пригоди", "пригоди"]
    },
    {
        title: "Кодекс самурая",
        pageCount: 220,
        authors: ["Кейт Харріс"],
        genres: ["пригоди", "історичний"]
    },
    {
        title: "Секрети фортепіано",
        pageCount: 120,
        authors: ["Елізабет Браун"],
        genres: ["музика", "навчальний"]
    }
];

// -знайти наібльшу книжку.

count = 0;
for (const book of books) {
    if (book.pageCount > count) {
        count = book.pageCount;
    }
}

for (const book of books) {
    if (book.pageCount === count) {
        console.log(`Найбільша книжка - ${book.title}  кількість сторінок -  ${book.pageCount}`);
    }
}

// - знайти книжку/ки з найбільшою кількістю жанрів
console.log('')
count = [];
for (const book of books) {
    if (book.genres.length > count.length) {
        count = book.genres;
    }
}

for (const book of books) {
    if (book.genres.length === count.length) {
        console.log(`книжка з найбільшою кількістю жанрів - ${book.title}`);
    }
}

// - знайти книжку/ки з найдовшою назвою
console.log('')
count = '';
for (const book of books) {
    if (book.title.length > count.length) {
        count = book.title;
    }
}

for (const book of books) {
    if (book.title.length === count.length){
        console.log(`книжкф з найдовшою назвою - ${book.title}`);
    }
}

// - знайти книжку/ки які писали 2 автори

console.log('')
for (const book of books) {
    if (book.authors.length === 2) {
        console.log(`книжкф які писали 2 автори - ${book.title}`);
    }
}

// - знайти книжку/ки які писав 1 автор

console.log('')
for (const book of books) {
    if (book.authors.length === 1) {
        console.log(`книжкф які писали 1 автор - ${book.title}`);
    }
}