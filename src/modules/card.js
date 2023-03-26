// Случайное число для количества отзывов
const reviewNumbers = document.getElementsByClassName('product-reviews__num');

for (let i = 0; i < reviewNumbers.length; i++) {
  reviewNumbers[i].textContent = Math.floor(Math.random() * 1000) + 1;
}

// Случайное число для ретинга
const productRating = document.getElementsByClassName('product-rating__num');
for (let i = 0; i < productRating.length; i++) {
  productRating[i].textContent = (Math.random() * 4 + 1).toFixed(1)
}

// Изменение текста при клике на кнопку "В корзину"
const buttonText = document.getElementsByClassName('product-button__add');
for (let i = 0; i < buttonText.length; i++) {
  buttonText[i].addEventListener('click',  () => {
    buttonText[i].innerText = 'Оформить заказ'
  })
}

// Всплывающее окно при добавлении в избранное
const productFavorite = document.getElementsByClassName('product-slide__img__like');

for(let i = 0; i< productFavorite.length; i++) {
  productFavorite[i].addEventListener('click', () => {

    productFavorite[i].classList.toggle('product-favorite');

    if (productFavorite[i].classList.contains('product-favorite')) {
      productFavorite[i].querySelector('.product-tooltip').classList.add('active');

      setTimeout(() => {
        productFavorite[i].querySelector('.product-tooltip').classList.remove('active');
      }, 1000)
    }
  })
}