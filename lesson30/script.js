let sum = 0.1 + 0.2;
console.log(sum);
// ---------------------------------------------------------------

let stringexample = '1';
let numberexample = 2;
console.log(+stringexample + numberexample);

// ---------------------------------------------------------------

let flash = prompt('Укажите объем флешки в Гб');
let how_many_files = Math.round (flash / 820);
alert(`Флешка вмещает ${how_many_files} файла по 820мб`);

// -----------------------------------------------------------------
    
let purse = prompt('Укажите имеющуусь у вас сумму денег в грн');
let price = prompt('Укажите цену одной шоколадки в грн');
let chocolate = Math.round(purse / price); 
let costs = chocolate * price;
let delivery = purse - costs;
alert(`Вы сможите купить  ${chocolate} шоколадок и у Вас останеться ${delivery} грн`);

// ----------------------------------------------------------------------
let three_digit_number = prompt('Укажите трехзначное число');
let y = 0;
for(; three_digit_number; three_digit_number = Math.floor(three_digit_number / 10)) {
    y *= 10;
    y += three_digit_number % 10;
}
console.log(y);
// ---------------------------------------------------------------------------------

let deposit_amount = prompt('Укажите сумму денег в грн, которую Вы хотите положить в банк на депозитный счет под 5 процентов годовых')
let a = (deposit_amount * 0.05) / 12;
console.log(a);
let b = +deposit_amount + +a;
console.log(b);
let c = (b * 0.05) / 12;
let d = a + c;
console.log(d);
// ------------------------------------------------------------------------------------

let f = 2 && 0 && 3;
console.log(f);

let j = 2 || 0 || 3;
console.log(j);

let h = 2 && 0 || 3;
console.log(h);
