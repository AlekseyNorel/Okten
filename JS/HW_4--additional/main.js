// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function smallestNum(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(num1)
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2)
    } else console.log(num3)
}

smallestNum(2, 1, 3)

// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function largestNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1)
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2)
    } else console.log(num3)
}

largestNum(3, 1, 2)

// // - створити функцію яка повертає найбільше число з масиву

function largestNumFromArray(arr) {
    let temp = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > temp) temp = arr[i];
    }
    return temp;
}

console.log(largestNumFromArray([1, 2, 55, 3, 12, -5224, 0]));

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arithmeticMeanOfArrayNumbers(arr) {
    let temp = 0;
    for (const number of arr) {
        temp += number
    }
    return temp / arr.length;
}

console.log(arithmeticMeanOfArrayNumbers([1, 2, 3, 0,]));
console.log('');

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function returnsTheLeastNumberOutputsTheMost(...args) {
    let tempLeast = Infinity;
    let tempMost = -Infinity;
    for (let i = 0; i < args.length; i++) {
        if (args[i] < tempLeast) {
            tempLeast = args[i]
        }
        if (args[i] > tempMost) {
            tempMost = args[i]
        }
    }
    console.log(tempMost)
    return tempLeast;
}

console.log(returnsTheLeastNumberOutputsTheMost(2, 1, 3, 123, 34, -2, 13));
console.log('');

// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function fillArrayWithRandomNumbers(arr, numberArrayElements) {
    for (let i = 0; i < numberArrayElements || i < arr.length; i++) {
        arr[i] = Math.round(Math.random() * 100);

    }
    return arr;
}

console.log(fillArrayWithRandomNumbers([2, 3, 5, 6]));
console.log(fillArrayWithRandomNumbers([], 25));
console.log('');

// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function fillArrayWithRandomNumbersAndLimit(arr, limit, numberArrayElements) {
    for (let i = 0; i < numberArrayElements || i < arr.length; i++) {
        arr[i] = Math.round(Math.random() * limit);

    }
    return arr;
}

console.log(fillArrayWithRandomNumbersAndLimit([2, 3, 5, 6], 20));
console.log(fillArrayWithRandomNumbersAndLimit([], 5, 10));
console.log('');

// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverseArr(arr) {
    let newArray = []
    for (let i = arr.length - 1; i >= 0; --i) {
        newArray[newArray.length] = arr[i];
    }
    return newArray;
}

console.log(reverseArr([1, 2, 3]));
console.log('');

// // - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function concatArgs(...args) {
    let temp = 0;
    if (args.length > 1) {
        for (const arg of args) {
            temp += arg;
        }
        return temp;
    } else {
        temp = args;
        return temp[0];
    }
}

console.log(concatArgs(5, 4, 7));
console.log('');

// // - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //     EXAMPLE:
// // [1,2,3,4]
// //     [2,3,4,5]
// // результат
// //     [3,5,7,9]

function scaleValueOfArrayElementsByIndex(arr1, arr2) {
    let newArr = [];
    if (arr1.length < arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            newArr[i] = arr1[i] + arr2[i];
        }
    } else {
        for (let i = 0; i < arr2.length; i++) {
            newArr[i] = arr1[i] + arr2[i];
        }
    }
    return newArr;
}

console.log(scaleValueOfArrayElementsByIndex([1, 2, 3, 4], [2, 3, 4, 5]));
console.log('');

// // - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// // EXAMPLE:
// //     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function returnArrayOfObjKeys(arr){
    let newArr = [];
    for (const element of arr) {
        for (const key in element) {
            newArr[newArr.length]=key;
        }
    }
    return newArr;
}

console.log(returnArrayOfObjKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));
console.log('');

// //     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// // EXAMPLE:
// //     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function returnArrayOfObjValues(arr){
    let newArr = [];
    for (const element of arr) {
        for (const key in element) {
            newArr[newArr.length]=element[key];
        }
    }
    return newArr;
}

console.log(returnArrayOfObjValues([{name: 'Dima', age: 13}, {model: 'Camry'}]));
