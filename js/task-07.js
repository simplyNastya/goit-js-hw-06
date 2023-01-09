// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const sizeEl = document.getElementById('font-size-control')
const textEl = document.getElementById('text')

console.log(sizeEl)
console.log(textEl)

sizeEl.oninput = function () {
    textEl.style.fontSize = sizeEl.value + 'px'
}