import React from 'react';
import { memo } from 'react';
const Todos = ({ todos,addTodo }) => {
    console.log("child render");
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
          </ul>
          <button onClick={addTodo}>addTodo</button>
    </div>
  );
};

export default memo(Todos);
