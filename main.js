let taskId = 0;

document.getElementById('addTaskButton').addEventListener('click', () => {
    const taskComment = document.getElementById('taskComment').value;
    if (taskComment === '') {
        alert('コメントを入力してください');
        return;
    }

    const taskDiv = document.createElement('div');
    
    const idDiv = document.createElement('div');
    idDiv.textContent = taskId++;
    idDiv.className = 'id';
    idDiv.style.marginRight = '20px';

    const commentDiv = document.createElement('div');
    commentDiv.textContent = taskComment;
    commentDiv.className = 'comment';
    commentDiv.style.marginRight = '20px';

    const statusButton = document.createElement('button');
    statusButton.textContent = '作業中';
    statusButton.className = 'status';
    statusButton.style.marginRight = '3px';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.className = 'delete';

    taskDiv.appendChild(idDiv);
    taskDiv.appendChild(commentDiv);
    taskDiv.appendChild(statusButton);
    taskDiv.appendChild(deleteButton);

    document.getElementById('taskTable').appendChild(taskDiv);

    document.getElementById('taskComment').value = '';
});