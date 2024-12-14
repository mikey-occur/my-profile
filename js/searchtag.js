var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.remove-all')

var tags = ['Visual Studio', 'Spring Boot']

function render(){
    content.innerHTML = ''
   for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `<li>
                             ${tag}
                            <i class="fas fa-times" onclick="removeTag(${i})"></i>
                         </li>`
   } /* onclick="remoteTag(${i}) thêm vào để mỗi tag mới sẽ nhận được sự kiện  */
   content.appendChild(input)
   input.focus()
}

function removeTag(index){
    /* console.log(index) rồi click vào x sẽ đếm index 0 1 2 */
    tags.splice(index, 1)
    render()
}

render()

input.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        console.log();
        tags.push(input.value.trim())
        input.value = ''
        render()
    }
})

btnRemoveAll.addEventListener('click', function(){
    tags = []
    render()
})