const button = document.querySelector('.showcase__person__icon');
const shareShow = document.querySelector('.share');

button.addEventListener('click', function () {
    button.classList.toggle('showcase__person__icon--active');
    shareShow.classList.toggle('show');
})