// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
const form = document.querySelector('.login-form')
form.addEventListener('submit', handleSubmit)

function handleSubmit (event) {
// Під час відправлення форми сторінка не повинна перезавантажуватися.
    event.preventDefault();
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
    const {elements: {email, password}} = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert("Please fill in all the fields!")
    }
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
    const formValues = {
        email: `${email.value}`,
        password: `${password.value}`
    };

// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
    console.log(formValues);
    event.currentTarget.reset();
}

