document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const commentText = document.getElementById('commentText').value;
  
    if (username && commentText) {
      addComment(username, commentText);
      document.getElementById('username').value = '';
      document.getElementById('commentText').value = '';
    }
  });
  
  function addComment(username, commentText) {
    const commentList = document.getElementById('commentList');
  
    const comment = document.createElement('div');
    comment.classList.add('comment');
  
    const nameElement = document.createElement('h4');
    nameElement.innerText = username;
  
    const textElement = document.createElement('p');
    textElement.innerText = commentText;
  
    comment.appendChild(nameElement);
    comment.appendChild(textElement);
    commentList.appendChild(comment);
  }
  