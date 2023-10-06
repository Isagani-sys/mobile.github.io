const searchInput = document.getElementById('search');
const searchContainer = document.getElementById('search-container');

searchInput.addEventListener('focus', () => {
    // Add an "active" class to the search bar when it's focused
    searchContainer.classList.add('active');
});

searchInput.addEventListener('blur', () => {
    // Remove the "active" class when the input loses focus
    searchContainer.classList.remove('active');
});
