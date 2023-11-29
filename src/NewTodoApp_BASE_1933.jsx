import React, { useState } from 'react';
import Task from './components/Task';

function NewTodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddClick = () => {
    if (input === '') {
      alert('コメントを入力してください');
      return;
    }

    const newTodos = todos.map((todo, index) => ({ ...todo, id: index }));
    setTodos([...newTodos, { id: newTodos.length, text: input, status: '作業中' }]);
    setInput('');
  };

  const handleDeleteClick = (id) => {
<<<<<<<<< Temporary merge branch 1
    const newTodos = todos.filter((todo) => todo.id !== id).map((todo, index) => ({ ...todo, id: index }));
=========
    const newTodos = todos.filter((todo) => todo.id !== id);
>>>>>>>>> Temporary merge branch 2
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>ToDoリスト</h1>
      <div>
        <input type="radio" id="all" name="status" checked />
        <label htmlFor="all">すべて</label>
        <input type="radio" id="working" name="status" />
        <label htmlFor="working">作業中</label>
        <input type="radio" id="completed" name="status" />
        <label htmlFor="completed">完了</label>
      </div>
      <div>
        {todos.map((todo) => (
<<<<<<<<< Temporary merge branch 1
          <Task key={todo.id} task={todo} handleDeleteClick={handleDeleteClick} />
=========
          <div key={todo.id}>
            <span>{todo.id}</span>
            <span>{todo.text}</span>
            <button>{todo.status}</button>
            <button onClick={() => handleDeleteClick(todo.id)}>削除</button> {/* 削除ボタン */}
          </div>
>>>>>>>>> Temporary merge branch 2
        ))}
      </div>
      <h2>新規タスクの追加</h2>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAddClick}>追加</button>
      </div>
    </div>
  );
}

export default NewTodoApp;