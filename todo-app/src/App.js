import React ,{ useState, useEffect } from 'react';
import Form from './components/Form';
import Content from './components/Content';
import './index.scss';

function App() {

  //Состояния объектов
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState ("all")
  const [filtredTodos,setFiltredTodos]= useState([])
  //use effect

  //Функции объеквов
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFiltredTodos(todos.filter(todo=> todo.completed === true))
        break;
      case 'uncompleted':
        setFiltredTodos(todos.filter(todo=> todo.completed === false))
        break;
      default:
        setFiltredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <div className='todo'>
        <Form inputText={inputText}
              todos= {todos}
              setTodos={setTodos} 
              setInputText={setInputText}
              setStatus={setStatus}
            />
        <Content setTodos={setTodos} todos={todos}/>
      </div>
    </div>

  );
}

export default App;
