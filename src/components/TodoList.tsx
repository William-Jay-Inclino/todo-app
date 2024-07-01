import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
  removeTodo: (index: number) => void;
  updateTodo: (index: number, newTodo: string) => void;
  editingIndex: number | null;
  setEditingIndex: (index: number | null) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo, updateTodo, editingIndex, setEditingIndex }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          index={index} 
          todo={todo} 
          removeTodo={removeTodo} 
          updateTodo={updateTodo} 
          isEditing={editingIndex === index}
          setEditingIndex={setEditingIndex}
        />
      ))}
    </div>
  );
};

export default TodoList;
