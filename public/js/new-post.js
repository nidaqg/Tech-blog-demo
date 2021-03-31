let newPost = document.querySelector('#createPost');

newPost.addEventListener('click', async function (event){
event.preventDefault();

const title = document.querySelector('#postTitle').value.trim();
const content = document.querySelector('#postContent').value.trim();

const response = await fetch(`/api/blogpost`, {
    method: 'POST',
    body: JSON.stringify({title,content}),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to publish!');
  }

});