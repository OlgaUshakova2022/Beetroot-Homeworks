// создать div
const div = document.createElement('div');
// добавить к нему класс wrapper
div.classList.add('wrapper');
// поместить его внутрь  тега body
const body = document.querySelector('body');
body.appendChild(div); 

// создать заголовок h1 с текстом
const header = document.createElement('h1');
header.textContent = 'Привет мир';
// добавить  h1 перед div с классом wrapper
div.insertAdjacentElement('beforebegin', header);
// сщздать список ul
// добавить в его три елемента один, два, три

const ul = `
<ul>
    <li>Один</li>
    <li>Два</li>
    <li>Три</li>
</ul>
`;
// Поместить ul в div с классом wrapper
div.innerHTML = ul;

// // создать изображение
// const img = document.createElement('img');
// // добавить следующие свойства к изображению
// // 1. добавить атрибут Source
// img.src = img/Image 1 (3).jpg;


// 2  добавить фтрибут width сщ значением 240
// img.width = 240;
// // // 3. добавить класс super
// img.classList.add('super')
// // // 4. добавить свойство alt сщ значением super man
// img.alt = 'super man';
// // // 5 Поместить изображение внутрь елемента с классом wrapper
// div.appendChild(img);

// Используя HTML стоку, создать div c  классом pDiv + c двумя параграфами
const elemHTML = `
<div class='pDiv'>
    <p>Параграф1</p>
    <p>Параграф2</p>
</div> `;
// Поместить этот div до елемента ul
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML);
// добавить до 2-го параграфа класс text
const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');

// Удалить первый параграф
pDiv.firstElementChild.remove();

// создать функцию, которая принимает три аргумента brand, color, year
// функция должнв возвращать разметку HTML 
//     <div class='autoCard' >
//     <h2>Brand Year</h2>
//     <p> Автомобиль BRAND - YEAR года. Возраст авто - YEAR лет.</p>




const generatAutoCard = (brand, color, year) => {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return ` <div class="autoCard">
                <h2>${brand.toUpperCase()} ${year}</h2>
                <p> Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${curYear - year} лет.</p>
                <p> Цвет:${color} </p>
                <button class = "btn" type = button>Удалить</button>
            </div>`;
}
    //     Cщздать новый див с классом autos     
const carsDiv = document.createElement('div');

carsDiv.classList.add('autos');
//     Cщздать 3 карточки авто, используя функцию
const carsList = [
    { brand: 'Tesla', year: 2015, color: 'red' },
    { brand: 'Lexus', year: 2016, color: 'silver' },
    { brand: 'Nissan', year: 2012, color: 'black' }
];
const carsHTML = carsList.map(car => {
    return generatAutoCard(car.brand, car.color, car.year);
}).join('');
// console.log(carsHTML);
// Поместить эти 3 карточки внутрь дива с классом autos 
carsDiv.innerHTML = carsHTML;
// console.log(carsDiv);
// Поместить див с классом autos на страницу DOM  до дива с классом wrapper 
div.insertAdjacentElement('beforebegin', carsDiv);

// При клике на кнопку удалять карточку из  структуры DOM 
// 1. ВЫбрать все кнопки

const buttons = document.querySelectorAll('.btn');
// console.log(buttons);

// 2. Создать фнкцию удаления
function handleClick(e) {
    const currentButton = e.currentTarget;
    // currentButton.parentElement.remove(); ИЛИ ТАК 
    currentButton.closest('.autoCard').remove();
    console.log(currentButton);

}
// 3. Использовать цикл, чтобы повесить обработчик события на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})