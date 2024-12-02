function toggleMenu() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active'); // This will toggle the "active" class on the menu list
}

 // Close the menu if clicking outside the menu or hamburger icon
 document.addEventListener('click', function(event) {
    const menuList = document.querySelector('.menu-list');
    const menuIcon = document.querySelector('.menu-icon');
    
    // If the click is outside the menu or the hamburger icon, close the menu
    if (!menuList.contains(event.target) && !menuIcon.contains(event.target)) {
        menuList.classList.remove('active');
    }
});