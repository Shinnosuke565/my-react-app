import React, { useState } from 'react';

function NewTodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('すべて');

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
    const newTodos = todos.filter((todo) => todo.id !== id).map((todo, index) => ({...todo, id: index}));
    setTodos(newTodos);
  };

  const handleStatusChange = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: todo.status === '作業中' ? '完了' : '作業中' };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const handleStatusFilterChange = (status) => {
    setSelectedStatus(status);
  };

  const filterTodos = (todo) => {
    if (selectedStatus === 'すべて') {
      return todo;
    }
    if (selectedStatus === '作業中' && todo.status === '作業中') {
      return todo;
    }
    if (selectedStatus === '完了' && todo.status === '完了') {
      return todo;
    }
    return null;
  };

  return (
    <div>
      <h1>ToDoリスト</h1>
      <div>
        <input type="radio" id="all" name="status" checked={selectedStatus === 'すべて'} onChange={() => handleStatusFilterChange('すべて')} /> {}
        <label htmlFor="all">すべて</label>
        <input type="radio" id="working" name="status" checked={selectedStatus === '作業中'} onChange={() => handleStatusFilterChange('作業中')} /> {}
        <label htmlFor="working">作業中</label>
        <input type="radio" id="completed" name="status" checked={selectedStatus === '完了'} onChange={() => handleStatusFilterChange('完了')} /> {}
        <label htmlFor="completed">完了</label>
      </div>
      <div>
        {todos.filter((todo) => filterTodos(todo)).map((todo) => (
          <div key={todo.id}>
            <Task task={todo} handleDeleteClick={handleDeleteClick} />
            <button onClick={() => handleStatusChange(todo.id)}>{todo.status}</button>
            <button onClick={() => handleDeleteClick(todo.id)}>削除</button>
          </div>
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
