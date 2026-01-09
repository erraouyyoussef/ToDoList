
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



