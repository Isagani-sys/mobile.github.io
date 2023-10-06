const searchInput = document.getElementById('search');
const container = document.querySelector('.container');

searchInput.addEventListener('focus', () => {
    const scrollY = window.scrollY;
    const containerTop = container.getBoundingClientRect().top;
    const inputTop = searchInput.getBoundingClientRect().top;
    const offset = inputTop - containerTop;
    
    // Check if the input field is obscured by the keyboard
    if (offset > window.innerHeight / 2) {
        const scrollAmount = offset - (window.innerHeight / 2);
        container.style.transform = `translateY(-${scrollAmount}px)`;
    }
});

searchInput.addEventListener('blur', () => {
    // Reset the container position when the input loses focus
    container.style.transform = 'translateY(0)';
});
