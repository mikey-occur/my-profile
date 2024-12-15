var eKey = document.querySelector('.card.key p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')
var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')

// console.log(eCode);

document.addEventListener('keydown', e=>{

    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    result.innerHTML = e.code

    alert.classList.add('hide') // Khi nhấn vào nó sẽ thêm chữ hide và ẩn đi
    box.classList.remove('hide') // sau đó nó sẽ xóa chữ hide ở box để hiện
})