import { useState, FormEvent } from 'react';

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input 
          type="text" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} 
          className="form-control" 
          placeholder="Add a todo" 
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
