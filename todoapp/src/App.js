
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React , {useState , useEffect} from 'react'


function App() {

  

  const [inputText , setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos,status] );


  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

 

  return (
    <div className="App">
     <header>
      <h1>Epic Todo App</h1>
     </header>
      <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText = {setInputText}/> 
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
       </div>
  );
}

export default App;
