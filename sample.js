const searchInput = document.getElementById('search');
const container = document.querySelector('.container');

searchInput.addEventListener('focus', () => {
    container.classList.add('active');
});

searchInput.addEventListener('blur', () => {
    container.classList.remove('active');
});
