const d4 = document.querySelector('#d4');
const d6 = document.querySelector('#d6');
const d8 = document.querySelector('#d8');
const d10 = document.querySelector('#d10');
const d12 = document.querySelector('#d12');
const d20 = document.querySelector('#d20');
const rollView = document.querySelector('#rolled');

d4.onclick = function () {
    const roll = Math.floor(Math.random() * 4) + 1;
    rollView.innerHTML = `<h2>${roll}</h2>`
}

d6.onclick = function () {
    const roll = Math.floor(Math.random() * 6) + 1;
    rollView.innerHTML = `<h2>${roll}</h2>`
}

d8.onclick = function () {
    const roll = Math.floor(Math.random() * 8) + 1;
    rollView.innerHTML = `<h2>${roll}</h2>`
}

d10.onclick = function () {
    const roll = Math.floor(Math.random() * 10) + 1;
    rollView.innerHTML = `<h2>${roll}</h2>`
}

d12.onclick = function () {
    const roll = Math.floor(Math.random() * 12) + 1;
    rollView.innerHTML = `<h2>${roll}</h2>`
}

d20.onclick = function () {
    const roll = Math.floor(Math.random() * 20) + 1;
    rollView.innerHTML = `<h2>${roll}</h2>`
}



