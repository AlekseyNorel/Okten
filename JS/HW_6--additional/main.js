// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    {
        let result = [];
        for (let i = 0; i < str.length; i += n) {
            let substring = str.slice(i, i + n);
            result.push(substring);
        }
        return result;
    }
}
document.writeln(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => str.slice(0, length);
document.writeln(delete_characters('Каждый охотник желает знать', 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = str => str.replaceAll(' ', '-').toUpperCase();
document.writeln(insert_dash("HTML JavaScript PHP"));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let firstLetterToUpperCase = str => {
    if (str.length === 0) {
        return str;
    }
    if (str.charAt(0) === ' ') {
        str = str.trim();
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(firstLetterToUpperCase('  охотник желает'));
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let nameToNormalize = str => str.replaceAll('-', ' ').replaceAll('_', ' ').replaceAll('.', ' ').split(' ').filter(word => word !== '').join(' ');
console.log(nameToNormalize('Ron---Whisley'));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let arrayWithRandomNumbers = () => {
    let arr = new Array(Math.floor(Math.random() * 50));
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 25);
    }
    return arr;
}
console.log(arrayWithRandomNumbers());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

console.log(arrayWithRandomNumbers().sort((a, b) => a - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

console.log(arrayWithRandomNumbers().filter(value => value % 2 === 0 && value !== 0));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = str => {
    str = str.trim();
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            newStr = str[i].toUpperCase();
            continue;
        }
        if (i !== 0 && str[i - 1] === ' ') {
            newStr += str[i].toUpperCase();
            continue;
        }
        newStr += str[i]
    }
    return newStr;
}
console.log(capitalize('масив рандомних цілих'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let emailValidator = mail => {
    mail = mail.toLowerCase();

    if (mail.indexOf('@') === 0) {
        return false;
    }

    let count = 0;
    for (let i = 0; i < mail.length; i++) {
        if (mail[i] === '@') {
            ++count;
        }
    }
    if (count !== 1) {
        return false;
    } else if (count === 1) {
        for (let i = mail.indexOf('@'); i < mail.indexOf('@') + 3; i++) {
            if (mail[i] === '.') {
                return false;
            }
        }
    }

    return true;
}
console.log(emailValidator('someemail@gmail.com'));
console.log(emailValidator('someeMAIL@gmail.com'));
console.log(emailValidator('someeMAIL@i.ua'));
console.log(emailValidator('some.email@gmail.com'));


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let filterByModulesElements = coursesArray.sort((a, b) => a.modules.length - b.modules.length)

console.log(filterByModulesElements);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringsearch) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringsearch) {
            ++count;
        }
    }
    return count;
}

let symb = "о";
str = "Астрономия это наука о небесных объектах";
document.write('<br>')
document.write(count(str, symb))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString2 = (str, n) => {
    let arrFromStr = str.split(' ');
    let newStr = '';
    for (let i = 0; i < n; i++) {
        newStr += arrFromStr[i] + ' ';
    }
    return newStr.trim();
}


let str2 = "Сила тяжести приложена к центру масс тела";
document.write('<br>')
document.write(cutString2(str2, 5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: 'The Adventure Begins',
        pageCount: 320,
        authors: ['John Smith'],
        genres: ['Adventure', 'Fantasy']
    },
    {
        title: 'Mystery Mansion',
        pageCount: 240,
        authors: ['Jane Doe'],
        genres: ['Mystery', 'Thriller']
    },
    {
        title: 'Sci-Fi Chronicles',
        pageCount: 400,
        authors: ['Robert Johnson', 'Emily Davis'],
        genres: ['Science Fiction']
    },
    {
        title: 'Romance in Paris',
        pageCount: 280,
        authors: ['Sophia Thompson'],
        genres: ['Romance', 'Contemporary']
    },
    {
        title: 'Historical Odyssey',
        pageCount: 500,
        authors: ['Michael Anderson'],
        genres: ['Historical Fiction']
    },
    {
        title: 'The Enchanted Forest',
        pageCount: 180,
        authors: ['David Green', 'Emma White'],
        genres: ['Fantasy', 'Children']
    },
    {
        title: 'Thriller Nights',
        pageCount: 320,
        authors: ['Sarah Johnson'],
        genres: ['Thriller', 'Mystery']
    },
    {
        title: 'The Art of Cooking',
        pageCount: 200,
        authors: ['Laura Miller'],
        genres: ['Cooking', 'Non-Fiction']
    },
    {
        title: 'Poetry Collection',
        pageCount: 150,
        authors: ['William Turner', 'Olivia Brown'],
        genres: ['Poetry']
    },
    {
        title: 'The Power of Mind',
        pageCount: 280,
        authors: ['Daniel Wilson'],
        genres: ['Self-Help', 'Motivational']
    }
];
// -знайти наібльшу книжку.

console.log(books);
let largestBook = books.sort((a, b) => a.pageCount - b.pageCount).map(book => {return {...book}}).pop();
console.log(largestBook);

// - знайти книжку/ки з найбільшою кількістю жанрів

let booksWithLargesGenresCount = books.sort((a, b) => b.genres.length - a.genres.length).filter(value => value.genres.length === books[0].genres.length);
console.log(booksWithLargesGenresCount);

// - знайти книжку/ки з найдовшою назвою

let booksWithLongestTitle = books.sort((a, b) => b.title.length - a.title.length).filter(value => value.title.length === books[0].title.length);
console.log(booksWithLongestTitle);

// - знайти книжку/ки які писали 2 автори

let booksWithTwoAuthors = books.filter(value => value.authors.length === 2)
console.log(booksWithTwoAuthors);

// - знайти книжку/ки які писав 1 автор

let booksWithOneAuthors = books.filter(value => value.authors.length === 1)
console.log(booksWithOneAuthors);

// - вісортувати книжки по кількості сторінок по зростанню

let sortBooksByPageCount = books.sort((a,b)=>a.pageCount-b.pageCount)
console.log(sortBooksByPageCount);