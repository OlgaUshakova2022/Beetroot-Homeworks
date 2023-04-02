
// Task 1. Создать HTML-страницу для отображения/редактирования текста.
// При открытии страницы текст отображается с помощью тега div.
// При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом,
// который теперь можно редактировать. При нажатии Ctrl + ,
// вместо textarea появляется div с уже измененным текстом.
// Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

const resultText = document.querySelector('.result-text');
const editorText = document.querySelector('.editor-text');

window.addEventListener('keydown', event => {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        editorText.classList.remove('hide');
        resultText.classList.add('hide');
        editorText.innerText = resultText.innerText;
    }

    if (event.code == 'Equal' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        editorText.classList.add('hide');
        resultText.classList.remove('hide');
        resultText.innerText = editorText.value;
    }
});

// -----------------------------------------------------------------------------------

const tableList = [
    {
        fullName: 'Олег Носков',
        age: 30,
        department: 'A'
    },
    {
        fullName: 'Марина Висова',
        age: 24,
        department: 'D'
    },
    {
        fullName: 'Кирилл Петров',
        age: 34,
        department: 'M'
    },
    {
        fullName: 'Ксения Уварова',
        age: 29,
        department: 'P'
    },
    {
        fullName: 'Дмитрий Киселев',
        age: 38,
        department: 'F'
    },
    {
        fullName: 'Николай Петров',
        age: 42,
        department: 'A'
    },
];

function sortingText(list, field, reverse = false) {
    const arr = list.sort((a, b) => {
        let nameA = a[field].toLowerCase();
        let nameB = b[field].toLowerCase();
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
    
    (reverse) ? arr.reverse() : arr;
}

function sortingNumber(list, field, reverse = false) {
    const arr = list.sort((a, b) => {
        return a[field] - b[field];
    });

    (reverse) ? arr.reverse() : arr;
}

function showTable(list) {
    let table = '';

    for(item of list) {
        table += `<tr>
                      <td>${item.fullName}</td>
                      <td class="col-age">${item.age}</td>
                      <td>${item.department}</td>
                  </tr>`;
    }

    return table;
}

function checkSort (classSort, listSort, rowSort, type = 'text') {
    const sort = document.querySelector(`.${classSort}`);
    
   
    const spanArrowAll = document.querySelectorAll(`.sort-h span`);
    for (let i=0; i < spanArrowAll.length; i++) {
        spanArrowAll[i].classList.remove('arrow');
    }

    if (type == 'text') {
        if (sort.classList.contains('sort')) {
            addArrow(type, listSort, rowSort, classSort, true, 180);
        } else {
            addArrow(type, listSort, rowSort, classSort);
        }
    } else {
        if (sort.classList.contains('sort')) {
            addArrow(type, listSort, rowSort, classSort, true, 180);
        } else {
            addArrow(type, listSort, rowSort, classSort);
        }
    }
}

function addArrow(type, list, row, classSort, reverse = false, deg = 0) {
    const sort = document.querySelector(`.${classSort}`);
    const spanArrow = document.querySelector(`.${classSort} span`);

    if (type === 'text') {
        sortingText(list, row, reverse);
    } else {
        sortingNumber(list, row, reverse);
    }
    
    sort.classList.toggle('sort');
    spanArrow.classList.add('arrow');
    const arrow = document.querySelector(`.arrow`);
    arrow.style.transform = `rotate(${deg}deg)`;
}


const table = document.querySelector('.table');
table.innerHTML = showTable(tableList);



const sortTable = document.querySelector('.sort-table');

sortTable.addEventListener('click', event => {
    const className = event.target.classList[0];

    if (className === 'sort-department') {
        checkSort('sort-department', tableList, 'department');
    } else if (className === 'sort-age') {
        checkSort('sort-age', tableList, 'age', 'number');
    } else {
        checkSort('sort-name', tableList, 'fullName');
    }

    table.innerHTML = showTable(tableList);
});







 


