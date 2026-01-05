let container = document.querySelector('.container');
let inputfiled = document.querySelector('#inputfiled');
let btn = document.querySelector('#btn');
let ul = document.querySelector('#ul');

btn.addEventListener('click', function () {
    if (inputfiled.value.length > 0) {
        let li = document.createElement('li');
        li.textContent = inputfiled.value.trim();
        ul.appendChild(li);
        inputfiled.value = '';

    } else {
        alert("Type You Task First")
    };

});


