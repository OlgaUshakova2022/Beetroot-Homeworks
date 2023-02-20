

let name = prompt('Ваше имя?','');
 alert(`Привет ${name} `);
let age = prompt('Укажите Ваш год рождения','');
const this_year = 2023;
let how_old_will_be = this_year - age;
alert(`В этом году Вaм исполняется ${how_old_will_be}`);
// -----------------------------------------------------
let side_of_a_square = prompt ('Укажите сторону квадрата в сантиметрах');
let square = (side_of_a_square * 4);
// let square = side_of_a_square * formula;
alert(`Площадь квадрата будет ${square} cm^2`);

// --------------------------------------------------------

let circle_radius =  prompt ('Укажите радиус окружности, пожалуйста');
let formula_circle = (circle_radius * circle_radius * 3.14159);
alert(`Площадь окружности будет ${formula_circle}`);

// -----------------------------------------------------------------------
let distance = prompt('Укажите растояние между городами, которое Вам нужно преодолеть в км','');
let time = prompt('Укажите время в часах, за которое Вы хотите преодолеть этот путь','');
let speed = distance / time;
alert(`Вам нужно двигаться со скоростью ${speed} км/час`);

// ----------------------------------------------------------------------
let exchange = prompt('Укажите колличество долларов, которое Вам нужно перевести в евро');
let exchange_Rates = 0.94;
let conversion = exchange * exchange_Rates;
alert(`Получится ${conversion} Euro`);