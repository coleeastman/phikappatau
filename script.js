function toggleMenu() {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var overlayContainer = document.getElementById('overlay-container');

    hamburgerMenu.classList.toggle('active');

    if (overlayContainer.style.display === 'none' || overlayContainer.style.display === '') {
        overlayContainer.style.display = 'flex'; 
    } else {
        overlayContainer.style.display = 'none';
    }
}
