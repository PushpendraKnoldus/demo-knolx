import './App.css';
import Todos from './components/Todos/Todos';
import TodosList from './components/TodosList/TodosList'

function App() {
  return (
    <div className='app'>
      <Todos />

      <TodosList />
    </div>
  );
}

export default App;
