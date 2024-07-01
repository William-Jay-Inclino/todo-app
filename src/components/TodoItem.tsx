import { useState } from 'react';

interface TodoItemProps {
  todo: string;
  index: number;
  removeTodo: (index: number) => void;
  updateTodo: (index: number, newTodo: string) => void;
  isEditing: boolean;
  setEditingIndex: (index: number | null) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, removeTodo, updateTodo, isEditing, setEditingIndex }) => {
  const [newTodo, setNewTodo] = useState(todo);

  const handleUpdate = () => {
    updateTodo(index, newTodo);
    setEditingIndex(null);
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      {isEditing ? (
        <div className="flex-grow-1 d-flex">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="form-control me-2"
          />
          <button onClick={handleUpdate} className="btn btn-success me-2">
            <i className="fas fa-check"></i>
          </button>
        </div>
      ) : (
        <div className="flex-grow-1 d-flex justify-content-between">
          <span className="me-2 text-truncate" style={{ maxWidth: 'calc(100% - 140px)' }}>{todo}</span>
          <div className="d-flex">
            <button onClick={() => setEditingIndex(index)} className="btn btn-warning me-2">
              <i className="fas fa-edit"></i>
            </button>
            <button onClick={() => removeTodo(index)} className="btn btn-danger">
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
