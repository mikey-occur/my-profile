var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')

var galleryImg = document.querySelector('.gallery_inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery(){
    if(currentIndex == 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }

    if(currentIndex == images.length - 1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }
    // HIỂN THỊ 
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentIndex = index
        showGallery()
    })
})

close.addEventListener('click', function(){
    gallery.classList.remove('show')    
})

// Nhấn Esc sẽ out ra
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){  
        gallery.classList.remove('show')
    }
})

// Nhấn vào phàn ngoài hình ảnh tự out ra
document.addEventListener('click', function(e) {
    if (e.target === gallery) {
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        showGallery()
    }
})

next.addEventListener('click', function(){
    if(currentIndex < images.length - 1){
        currentIndex++
        showGallery()
    }
})

// JavaScript để điều khiển menu trong màn hình nhỏ
function toggleMenu() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
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