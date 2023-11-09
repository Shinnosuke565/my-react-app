import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddClick = () => {
    if (input === '') {
      alert('コメントを入力してください');
      return;
    }

    setTodos([...todos, { id: todos.length, text: input, status: '作業中' }]);
    setInput('');
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
          <div key={todo.id}>
            <span>{todo.id}</span>
            <span>{todo.text}</span>
            <button>{todo.status}</button>
            <button>削除</button>
          </div>
        ))}
      </div>
      <h2>新規タスクの追加</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddClick}>追加</button>
      </div>
    </div>
  );
}

export default TodoApp;
