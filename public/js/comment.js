let newComment = document.querySelector('#commentSubmit');

newComment.addEventListener('click', async function (event){
event.preventDefault();

const content = document.querySelector('#newComment').value.trim();
const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

if(content) {
const response = await fetch(`/api/comment`, {
    method: 'POST',
    body: JSON.stringify({content,id}),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to publish!');
  }
  } else {
    alert('Must add comment to proceed')
}

});