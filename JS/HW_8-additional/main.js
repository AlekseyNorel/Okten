//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


class User {
    constructor(id, name, username, email, addressStreet, addressSuite, addressCity, addressZipcode, addressGeoLat, addressGeoLng, phone, website, companyName, companyCatchPhrase, companyBs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;

        this.address = {
            street: addressStreet,
            suite: addressSuite,
            city: addressCity,
            zipcode: addressZipcode,
            geo: {
                lat: addressGeoLat,
                lng: addressGeoLng
            }
        };

        this.company = {
            name: companyName,
            catchPhrase: companyCatchPhrase,
            bs: companyBs
        };
    }
}

// Приклад використання:

const user = new User(
    1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets'
);

console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function Tag(titleOfTag, action, attrs) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}

function Attribute(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
}

const a = new Tag(
    'a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [
        new Attribute('href', 'Задает адрес документа, на который следует перейти.'),
        new Attribute('target', 'Имя окна или фрейма, куда браузер будет загружать документ.')
    ]
);
console.log(a);

const div = new Tag(
    'div',
    'Тег <div> предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    [
        new Attribute('class', 'Определяет имя класса для стилей в CSS.'),
        new Attribute('id', 'Указывает уникальный идентификатор элемента.')
    ]
);
console.log(div);

const h1 = new Tag(
    'h1',
    'Тег <h1> представляет собой наиболее важный заголовок первого уровня.',
    [
        new Attribute('align', 'Задает выравнивание заголовка относительно содержимого.')
    ]
);
console.log(h1);

const span = new Tag(
    'span',
    'Тег <span> предназначен для определения строчных элементов документа.',
    [
        new Attribute('style', 'Применяется для определения стиля элемента с помощью правил CSS.'),
        new Attribute('title', 'Добавляет всплывающую подсказку к содержимому.')
    ]
);
console.log(span);

const input = new Tag(
    'input',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    [
        new Attribute('type', 'Определяет тип элемента управления.'),
        new Attribute('name', 'Имя элемента, которое будет передано на сервер или в скрипт обработчика.')
    ]
);
console.log(input);

const form = new Tag(
    'form',
    'Тег <form> устанавливает форму на веб-странице.',
    [
        new Attribute('action', 'Адрес программы или документа, который обрабатывает данные формы.'),
        new Attribute('method', 'Метод протокола HTTP, с помощью которого данные формы будут отправлены на сервер.')
    ]
);
console.log(form);

const option = new Tag(
    'option',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
    [
        new Attribute('value', 'Значение, которое будет отправлено на сервер или выведено в списке.')
    ]
);
console.log(option);

const select = new Tag(
    'select',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.',
    [
        new Attribute('size', 'Количество отображаемых строк списка.')
    ]
);
console.log(select);




































