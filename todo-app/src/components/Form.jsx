import React  from "react";


const Form = ({setInputText,inputText, todos, setTodos}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: inputText, completed:false, id: Math.random()* 1000}
        ]);
        setInputText("");
    };

    
    return (
        <div className="todo__sidebar">
            <input className="field" value={inputText} 
            onChange={inputTextHandler}
             placeholder="Введите задачу...">
            </input>
            <button onClick={submitTodoHandler} className="button">Добавить задачу</button>
        </div>
    );
};


export default Form
