import React from 'react';

function Task({ task, handleDeleteClick }) {
  return (
    <div>
      <span>{task.id}</span>
      <span>{task.text}</span>
      <button>{task.status}</button>
      <button onClick={() => handleDeleteClick(task.id)}>削除</button>
    </div>
  );
}

export default Task;