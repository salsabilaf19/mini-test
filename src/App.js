import { useState } from 'react';
import './App.css';

const Square = ({title}) => {
  return (
    <div className="square-style">
      {title}
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addNewTodo = () => {
    // current date
    setTodos([...todos,{title:  newTodo, id: Date.now() }]);
  };
  return (
    <div>
      <input value={newTodo} onChange={handleChange}/>
      <h1>To Do List</h1>
      <button onClick={addNewTodo}>Add new to do</button>

      <div className="list-container">
        {todos.map((todo) => {
          return <Square 
          title={todo.title} 
          key={`todo-${todo.id}`} />
        })}
      </div>
    </div>
  );
};

export default App;