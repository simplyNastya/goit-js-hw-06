// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

let inputEl = document.getElementById("name-input");
let nameOutputEl = document.getElementById("name-output");

inputEl.oninput = function () {
    if (inputEl.value === '') {
       nameOutputEl.innerHTML = 'Anonymous';
    } else{
    nameOutputEl.innerHTML = inputEl.value;
    }
}