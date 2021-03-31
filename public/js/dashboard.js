let newBtn = document.querySelector('#newPost');


newBtn.addEventListener('click', async function (event) {
    event.preventDefault();
    document.location.replace('/newpost');
})