// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const button = {
    remove: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    value: document.getElementById("value"),
  };
  
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
   button.value.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    button.value.textContent = counterValue;
  };
  
  button.remove.addEventListener("click", increment);
  button.add.addEventListener("click", decrement);