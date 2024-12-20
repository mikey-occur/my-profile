const lantern = document.getElementById('lantern');
const body = document.body;

lantern.addEventListener('click', () => {
    lantern.classList.toggle('on');
    body.classList.toggle('light-on');
})
