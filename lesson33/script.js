let userAge = +prompt('your age');
if (isNaN(userAge)) {
    alert('введите число')
} else if (userAge >= 0 && userAge <= 2) {
    alert("ты немовля")   
} else if (userAge >= 3 && userAge <= 11) {
    alert  ("ти дитина")
} else if (userAge >= 12 && userAge <= 18) {
    alert  ("ти  підліток")
} else if (userAge >= 19 && userAge <= 60) {
    alert  ("ти  дорослий")
} else {
  alert ('ти пенсіонер')
}; 
// 0 - 2
// 3 - 11
// 12 - 18
// 19 - 60
// 60