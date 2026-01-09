// let container = document.querySelector('.container');
// let inputfiled = document.querySelector('#inputfiled');
// let btn = document.querySelector('#btn');
// let ul = document.querySelector('#ul');





// function addTask() {
//     if (inputfiled.value.length > 0) {
//         let list = document.createElement('li');
//         let span = document.createElement('span');
//         list.textContent = inputfiled.value;
//         ul.append(list);
//         span.textContent = ('⛔');
//         list.append(span);
//         ul.append(list);
//         inputfiled.value = '';

//         span.onclick = function () {
//             list.remove();
//             saveData()
//         };
//         list.onclick = function () {
//             list.classList.toggle('checked');
//             saveData()
//         }

//     } else {
//         alert("Type You Task First")
//     };
//     saveData()
// }

// btn.addEventListener('click', addTask);


// function saveData() {
//     localStorage.setItem('data', ul.innerHTML);
// }
// function showData() {
//     ul.innerHTML = localStorage.getItem("data");
// }
// showData()
// localStorage.clear()

let inputfiled = document.querySelector('#inputfiled');
let btn = document.querySelector('#btn');
let ul = document.querySelector('#ul');

function addTask() {
    let task = inputfiled.value.trim();

    if (task === '') {
        alert("Type your task first");
    }
    else if (task.length > 30) {
        alert("Task should be less than 10 letters");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <span>⛔</span>
        `;
        ul.appendChild(li);
        inputfiled.value = '';
        saveData();
    }
}

inputfiled.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
})

btn.addEventListener('click', addTask);

ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }

    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});


function saveData() {
    localStorage.setItem('data', ul.innerHTML);
}

function showData() {
    ul.innerHTML = localStorage.getItem('data') || '';
}
showData();



