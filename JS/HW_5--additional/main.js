// Всі функції повинні бути описані стрілочним типом!!!!


//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const a = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
    } else console.log(num3);
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const b = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else console.log(num3);
}

// - створити функцію яка повертає найбільше число з масиву

const c = (arr) => {
    let temp = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > temp) {
            temp = arr[i]
        }
    }
    return temp;
}


// - створити функцію яка повертає найменьше число з масиву

const d = (arr) => {
    let temp = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < temp) {
            temp = arr[i]
        }
    }
    return temp;
}


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const e = (arr) => {
    let temp = 0;
    for (const arrElement of arr) {
        temp += arrElement;
    }
    return temp;
}


// - Дано натуральное число n. Выведите все числа от 1 до n.

const f = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

const g = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const h = (arr, num) => {
    if (num >= arr.length) {
        console.log('Щось не то натицав')
        return;
    }
    let temp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (i === num) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    return arr;
}

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

const i = (arr) => {
    if (arr.length < 2) {
        console.log('занадто малий масив')
        return;
    }

    if (arr.length > 100) {
        console.log('занадто великий масив')
        return;
    }

    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            tempArr[tempArr.length] = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            tempArr[tempArr.length] = arr[i];
        }
    }
    return tempArr;

}



