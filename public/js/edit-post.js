let editPost = document.querySelector('#editPost');
let deletePost = document.querySelector('#deletePost');

editPost.addEventListener('click', async function (event){
event.preventDefault();

const title = document.querySelector('#postTitle').value.trim();
const content = document.querySelector('#postContent').value.trim();
const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];


const response = await fetch(`/api/blogpost/edit/${id}`, {
    method: 'PUT',
    body: JSON.stringify({title,content}),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update');
  }

});

deletePost.addEventListener('click', async function (event){
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log(id)

        const response = await fetch(`/api/blogpost/edit/${id}`, {
          method: 'DELETE',
          body: JSON.stringify({id:id}),
          headers: {'Content-Type': 'application/json'}
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete post');
        }
      }
)

