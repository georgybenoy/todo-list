import AddTodo from './AddTodo';
import TodoList from './TodoList';

function TodoApp({ todos, addTodo, toggleTodo, deleteTodo }) {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Tasks</h1>
        <p>{todos.length} {todos.length === 1 ? 'task' : 'tasks'} total</p>
      </header>
      
      <AddTodo onAdd={addTodo} />
      
      <TodoList 
        todos={todos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo} 
      />
    </div>
  );
}

export default TodoApp;
