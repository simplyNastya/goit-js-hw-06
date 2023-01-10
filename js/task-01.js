// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const listCategoriesEl = document.querySelectorAll('.item')
let categoriesNumber = String(listCategoriesEl.length)
console.log('Number of categories:', categoriesNumber)

// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
const listTitleEl = document.querySelectorAll('#categories>li');
listTitleEl.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}, Elements: ${elem.lastElementChild.children.length}`,
    )}
)

