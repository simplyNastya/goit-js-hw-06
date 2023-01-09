const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

// Напиши скрипт для створення галереї зображень на підставі масиву даних. 
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.


const imgContainer = document.querySelector('.gallery');

const elements = [];
for (let i = 0; i < images.length; i += 1) {
    const option = images[i];
    const imgEl = document.createElement('img');
    imgEl.src = option.url;
    imgEl.alt = option.alt;
    imgEl.width = 340;
    elements.push(imgEl);
}
console.log(elements)
imgContainer.append(...elements)

imgContainer.insertAdjacentHTML('beforeend', `<li> ${elements} </li>`)
console.log(imgContainer)

