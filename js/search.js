var btnSearch = document.querySelector('.search-box_btn')

btnSearch.addEventListener('click',function(){
    this.parentElement.classList.toggle('open')
    // console.log(this.previousElementSibling);
    // this xài với function bình thường
    // xài previousElementSibling vì input là previous chứ ko phải next
    this.previousElementSibling.focus();
})
