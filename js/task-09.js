// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
const changeColorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

changeColorBtn.addEventListener('click', handleBackgroundColor)

function handleBackgroundColor (event) {
    document.body.style.backgroundColor = getRandomHexColor();
    colorValue.textContent = getRandomHexColor();
}

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }