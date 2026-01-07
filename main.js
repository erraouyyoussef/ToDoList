let container = document.querySelector('.container');
let inputfiled = document.querySelector('#inputfiled');
let btn = document.querySelector('#btn');
let ul = document.querySelector('#ul');


btn.addEventListener('click', function () {
    if (inputfiled.value.length > 0) {
        let li = document.createElement('li');
        li.textContent = inputfiled.value;
        ul.append(li);
        inputfiled.value = '';
        saveData();

    } else {
        alert("Type You Task First")
    };
});


function saveData() {
    localStorage.setItem('data', ul.innerHTML);
}
function showData() {
    ul.innerHTML = localStorage.getItem("data");
}
showData()



