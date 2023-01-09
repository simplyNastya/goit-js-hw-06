const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1) Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
const firstListItemEl = document.createElement('li')
const secondListItemEl = document.createElement('li')
const thirdListItemEl = document.createElement('li')
const fourthListItemEl = document.createElement('li')
const fifthListItemEl = document.createElement('li')
const sixthListItemEl = document.createElement('li')
// 2) Додасть назву інгредієнта як його текстовий вміст.
firstListItemEl.textContent = ingredients[0]
secondListItemEl.textContent = ingredients[1]
thirdListItemEl.textContent = ingredients[2]
fourthListItemEl.textContent = ingredients[3]
fifthListItemEl.textContent = ingredients[4]
sixthListItemEl.textContent = ingredients[5]
// 3) Додасть елементу клас item.
firstListItemEl.classList.add('item')
secondListItemEl.classList.add('item')
thirdListItemEl.classList.add('item')
fourthListItemEl.classList.add('item')
fifthListItemEl.classList.add('item')
sixthListItemEl.classList.add('item')
// 4) Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const listEl = document.querySelector('#ingredients')
listEl.append(firstListItemEl, secondListItemEl, thirdListItemEl, fourthListItemEl, fifthListItemEl, sixthListItemEl)