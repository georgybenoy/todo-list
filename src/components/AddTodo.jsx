import { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form className="add-todo-section" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-todo-input"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button 
        type="submit" 
        className="add-todo-btn"
        disabled={text.trim().length === 0}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
