let age = prompt('Укажите Ваш возраст');
if (isNaN(age)) {
    alert('введите число')
}
 else if (age < 11) {
    alert ('Bы ребенок')
}
else if (age > 11 && age <= 17) {
    alert ('Вы подросток')
}
else if (age > 17 && age < 60) {
    alert ('Вы взрослый')
}
else  if (age > 60 && age < 100){
    alert ('Вы пенсионер')
}
else if (age> 100){
    alert ('Какой интересный возраст')
};
// ---------------------------------------------------------------------------

let usernumber = prompt('Укажите чило от 0 до 9');
if (isNaN(usernumber)) {
    alert('введите число')
}
else if (usernumber == 0) {
    alert (')')
}
else if (usernumber == 1) {
    alert ('!')
}
else if (usernumber == 2) {
    alert ('@')
}
else if (usernumber == 3) {
    alert ('#')
}
else if (usernumber == 4) {
    alert ('$')
}
else if (usernumber == 5) {
    alert ('%')
}
else if (usernumber == 6) {
    alert ('^')
}
else if (usernumber == 7) {
    alert ('&')
}
else if (usernumber == 8) {
    alert ('*')
}
else if (usernumber == 9) {
    alert ('(')
};
// ----------------------------------------------------------------------------------

let user_sum_number1 = +prompt('Укажите чиcло', '');
if (isNaN(user_sum_number1)) {
    alert('введите число')
};
let user_sum_number2 = +prompt('Укажите еще одно чиcло', '');
if (isNaN(user_sum_number2)) {
    alert('введите число')
};
let sum = 0;

if (user_sum_number1 < user_sum_number2) {
    for (let i = user_sum_number1; i <= user_sum_number2; i++) {
        sum = sum + i;
    }
}
else
{
    for (let i = user_sum_number2; i <= user_sum_number1; i++) {
        sum = sum + i;
    }
}

alert(`Сумма чисел в данном диапозоне ${sum}`);

// // ---------------------------------------------------------------------------------------

let first_number = +prompt('Укажите чиcло', '');
if (isNaN(first_number)) {
    alert('введите число')
};
let second_number = +prompt('Укажите еще одно чиcло', '');
if (isNaN(second_number)) {
    alert('введите число')
};

let mavNOD = 1;

let min = (first_number > second_number) ? second_number : first_number;

for (let i = 2; i <= min; i++) {
    if (first_number % i === 0 && second_number % i === 0)
    {
        mavNOD = i;
    }
}

alert(`наибольший общий делитель этих чисел ${mavNOD}`);

// -------------------------------------------------------
let firstNumber = +prompt('Укажите чиcло', '');
if (isNaN(firstNumber)) {
        alert('введите число')
    }
for (let i = 1; i <= firstNumber; i++) {
    if (firstNumber % i === 0)
    {
        alert(i);
    }
}
// -------------------------------------------------------------------

let polindrom = prompt('Укажите чиcло, состоящее из пяти цифр', '');
if (isNaN(polindrom)) {
    alert('введите число')
}
 else if (polindrom[0] === polindrom[4] && polindrom[1] === polindrom[3]){

    alert('Ваше число является полиндромом')
}
else {
    alert('Ваше число не является полиндромом')
};

// ----------------------------------------------------------

let discount = prompt('Укажите сумму Вашей покупки в грн', '');
if (isNaN(discount)) {
    alert('введите число')
}
else if (discount >= 200 && discount <= 300) {
    alert (`  сумма к оплате с учетом скидки ${discount*0.97} грн`)
}
else if (discount > 300 && discount <= 500) {
    alert (`  сумма к оплате с учетом скидки ${discount*0.95} грн`)
}
else if (discount > 500) {
    alert (`сумма к оплате с учетом скидки ${discount*0.93} грн`)
};


// -------------------------------------------------------------------
let num = '';
let positive = 0;
let negative = 0;
let nulls = 0;
let evenNumbers = 0;
let notEvenNumbers = 0;

for (i = 0; i < 10; i++) {
    num += prompt('Укажите любое число')
}

for (i = 0; i < num.length; i++){
    if (num[i] == '-') {
        negative++;
        if (num[i + 1] % 2 == 0) {
            evenNumbers++;
        } else {
            notEvenNumbers++;
        }
        i++;
    }
    else {
        if (num[i] == 0)
        {
            nulls++;
            evenNumbers++;
        }
        else if (num[i] % 2 == 0) {
            evenNumbers++;
            positive++;

        } else {
            notEvenNumbers++;
            positive++;

        }
    }
}

alert(` Вы ввели ${positive} положительных чисел,\n ${negative} отрицательных чисел\n ${nulls} нулей\n ${evenNumbers} четных чисел\n ${notEvenNumbers} нечетных чисел`);

// -------------------------------------------------------------------

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let V = 7;

while (confirm(weekDays[V % 7]))
{
    V++;
};

// ---------------------------------------------------------------------------
// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і
// відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй
// результат в N і питай у користувача «Ваше число > N, <N або == N ?». Залежно від того що вказав
// користувач, зменшуй діапазон.Початковий діапазон від 0 до 100, поділи навпіл і отримай 50.
// Якщо користувач вказав, що його число > 50, то зміни діапазон на від 50 до 100. І так до тих пір,
//     поки користувач не вибере == N(буде корисним почитати про алгоритм: "бінарний пошук").

prompt('Загадайте число  от 0 до 100');
let a = confirm('Ваше число больше 50 ?');
if (a) {
    for (i = 50; i >= 50 && <= 100; i++) {
        let N = i;
    }
    alert(N)
    else if (a==false){ 
                 for(i = 50; i <= 50; i--) {
                 let N = i;
                    }
            }
    else {
            alert(50)
    }
}
if (a) {
     let b = confirm(`Ваше число находится в этом диапозоне ${N}. Оно больше 75 ?`);
}
else {
    let d = confirm('Ваше число больше 25 ?');
}

if (b) {
    let c = confirm('Ваше число больше 87 ?');
}