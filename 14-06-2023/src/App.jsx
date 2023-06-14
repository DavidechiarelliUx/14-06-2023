import TodoForm from './components/form/TodoForm';
import { todoList } from './mocks/todo-list';
import './App.css'
import Todo from './components/todo/Todo';

function App() {

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm/>
      <div className="TodoList">
        {todoList.map((todo) => (
          <Todo data={todo}/>
        ))}
      </div>
    </div>
  );
}

export default App;
