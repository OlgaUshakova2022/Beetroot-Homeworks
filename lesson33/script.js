

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість,
//      обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи
//      для роботи з цим об'єктом:


let car = {
    manufacturer: 'Fiat',
    model: 500,
    yearOfManufacture: '2013',
    averageSpeed: 100,
    fuelTankVolume: 10,
    averageFuelConsumptionPer100Km: 100,
        drivers: {
        name:' Bob',
        lastName: 'Slaw', //висячая запятая
    }
};
// Метод, який виводить на екран інформацію про автомобіль.

function makeCar(a) {
    return{a}
}
let infoCar = makeCar(car);
console.log('infoCar',infoCar);
// -----------------------или так ------------------------------------------
console.log(Object.getOwnPropertyNames(car));

// Додавання ім’я водія у список

car.drivers.name2 = 'Gordon';
// ------------------------------или так---------------------------------
Object.assign(car.drivers, {name3:'Richard'});

// ------------------------------------------------------------------------------------------
// Перевірка водія на наявність його ім’я у списку

if ('name3' in car.drivers) {
    console.log(car.drivers.name3);
}

// --------------------------------------------------------------------------------

  

// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою
// швидкістю.Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву
// на 1 годину.

const distance = 500;
const speed = 80;
const fuelConsumption = 10;

let time = distance / speed;
let fuel = (distance / 100) * fuelConsumption;

if (time >= 4) {
  const restCount = Math.floor(time / 4);
  time += restCount;
}

console.log(`Необходимое время: ${time} год`);
console.log(`Необходимое колличество топлива: ${fuel} л`);




// let nnn = [];
// let rrr = alert('Загадайте число  от 0 до 100');
// let a = confirm('Ваше число больше 50 ?');
// if (a) {
//     for (i = 50; i <= 100; i++) {
//         nnn.push(i);
//     }
// }
// else {
//       for(i = 50; i <= 50; i--) {
//           nnn.push(i);
//       }
// };

// if (a) {
//     let b = confirm(`Ваше число находится среди этих чисел ${nnn}. Оно больше 75 ?`);
    
// }
// else {
//     let d = confirm(`Ваше число находится среди этих чисел ${nnn}. Оно меньше 25 ?`);
// }

// -------------------------------Задача с урока -------------------------------------------
// const button = document.getElementById('button-like');
const button = document.querySelector('#button-like');
// const span = document.getElementById('span');
const span = document.querySelector('#span');
button.addEventListener('click', aaa);
function aaa() {
   
    // console.log(span.textContent);
     ++span.textContent 
}


