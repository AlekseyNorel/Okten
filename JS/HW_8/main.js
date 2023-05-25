// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

let User = function (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let arr = [
    new User(23, 'Kevin ', 'Bryant', 'qwe@gmail.com', '+380942986121'),
    new User(212, 'Gibson ', 'Ward', '281av0@gmail.com', '+380956494764'),
    new User(654, 'Ryland', 'Simmons', 'o0my@gmail.com', '+380970108960'),
    new User(34, 'Nestor ', 'Gray', '768ptl4nv@gmail.com', '+380974252705'),
    new User(65, 'Uriyah ', 'Evans', 'i8ovxn2f@gmail.com', '+380969954349'),
    new User(25, 'Roselyn', 'Lopez', 'r0o6f92@gmail.com', '+380682328635'),
    new User(11, 'Rose ', 'Torres', 'corwin.arne@hotmail.com', '+380937431613'),
    new User(76, 'Ingrid ', 'Morgan', 'shills@waters.com', '+380670526117'),
    new User(98, 'Nathalia ', 'Ramirez', 'dejon22@turner.com', '+380989894432'),
    new User(99, 'Zarina', 'Perry', 'easton.lockman@dare.org', '+380984727238'),
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredById = arr.filter(value => value.id % 2 === 0)
console.log(filteredById);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortById = arr.map(value => {
    return {...value}
}).sort((a, b) => a.id - b.id)
console.log(sortById);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client


let arr2 = [
    new Client(23, 'Kevin ', 'Bryant', 'qwe@gmail.com', '+380942986121', ['book', 'phone', 'pen']),
    new Client(212, 'Gibson ', 'Ward', '281av0@gmail.com', '+380956494764', ['car', 'pen']),
    new Client(654, 'Ryland', 'Simmons', 'o0my@gmail.com', '+380970108960', ['book', 'phone', 'pen']),
    new Client(34, 'Nestor ', 'Gray', '768ptl4nv@gmail.com', '+380974252705', ['book', 'phone', 'pen', 'car', 'TV']),
    new Client(65, 'Uriyah ', 'Evans', 'i8ovxn2f@gmail.com', '+380969954349', ['book', 'phone', 'pen']),
    new Client(25, 'Roselyn', 'Lopez', 'r0o6f92@gmail.com', '+380682328635', ['book', 'phone', 'pen']),
    new Client(11, 'Rose ', 'Torres', 'corwin.arne@hotmail.com', '+380937431613', ['book', 'phone', 'pen']),
    new Client(76, 'Ingrid ', 'Morgan', 'shills@waters.com', '+380670526117', ['book', 'phone', 'pen']),
    new Client(98, 'Nathalia ', 'Ramirez', 'dejon22@turner.com', '+380989894432', ['book', 'phone', 'pen']),
    new Client(99, 'Zarina', 'Perry', 'easton.lockman@dare.org', '+380984727238', ['book', 'phone', 'pen']),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(arr2.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model, manufacturer, yearOfmanufacture, maximumSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfmanufacture = yearOfmanufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;
}

let newCar = new Car('f15', 'BMW', 2018, 340, 4.5)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
}
newCar.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

Car.prototype.info = function () {
    console.log(`    model - ${this.model}
    manufacturer - ${this.manufacturer}
    yearOfmanufacture - ${this.yearOfmanufacture}
    maximumSpeed - ${this.maximumSpeed}
    engineCapacity - ${this.engineCapacity}
    `)
}
newCar.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maximumSpeed += newSpeed;
}
console.log(newCar.maximumSpeed);
newCar.increaseMaxSpeed(25)
console.log(newCar.maximumSpeed);

// -- changeYear (newValue) - змінює рік випуску на значення newValue

Car.prototype.changeYear = function (newValue) {
    this.yearOfmanufacture = newValue;
}
console.log(newCar.yearOfmanufacture);
newCar.changeYear(2020)
console.log(newCar.yearOfmanufacture);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

Car.prototype.addDriver = function (NewDriver) {
    this.driver = NewDriver;
}
newCar.addDriver({name: 'alex', age: 33})
console.log(newCar.driver);




// - (Те саме, тільки через клас)


// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car2 extends Car{
    constructor(model, manufacturer, yearOfmanufacture, maximumSpeed, engineCapacity) {
        super(model, manufacturer, yearOfmanufacture, maximumSpeed, engineCapacity)
    }
}
let newCar2 = new Car2('camry', 'toyota', 2015, 260, 2)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

newCar2.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

newCar2.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

console.log(newCar2.maximumSpeed);
newCar2.increaseMaxSpeed(25)
console.log(newCar2.maximumSpeed);

// -- changeYear (newValue) - змінює рік випуску на значення newValue

console.log(newCar2.yearOfmanufacture);
newCar2.changeYear(2017)
console.log(newCar2.yearOfmanufacture);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

newCar2.addDriver({name: 'max', age: 25});
console.log(newCar2.driver);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let arrayOfCinderellas = [
    new Cinderella('Анна', 20, 37),
    new Cinderella('Бетті', 22, 38),
    new Cinderella('Каріна', 23, 36),
    new Cinderella('Діана', 21, 33),
    new Cinderella('Ельза', 19, 36),
    new Cinderella('Фея', 25, 38),
    new Cinderella('Ганна', 24, 37),
    new Cinderella('Ірина', 27, 35),
    new Cinderella('Жанна', 26, 38),
    new Cinderella('Катя', 28, 32)
];



// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince extends Cinderella {
    constructor(name,age,shoe) {
        super(name,age);
        this.shoe=shoe;
    }
}

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let newPrince = new Prince('alex',33,arrayOfCinderellas.map(value => {return{...value}}).sort((a,b)=>a.footSize-b.footSize)[0].footSize);
for (const cinderella of arrayOfCinderellas) {
    if (cinderella.footSize===newPrince.shoe){
        console.log(cinderella);
        break;
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(arrayOfCinderellas.find(value => value.footSize === newPrince.shoe));