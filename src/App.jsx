import './App.css';
import { Todo } from './components/todo/Todo';

function App() {
  return (
    <div style={{padding: "50px"}}>
      <h1 style={{marginBottom: '20px'}}>Lista de Tareas</h1>
      <Todo />
    </div>
  );
}

export default App;
