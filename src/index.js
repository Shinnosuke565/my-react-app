import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NewTodoApp from './NewTodoApp';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NewTodoApp />
  </React.StrictMode>
);