import React from "react";

const Todo = ({text,todo, todos,setTodos}) => {
    //событие (удаление и выполнения)
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !==todo.id));
    };
    
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id===todo.id){
                return{
                    ...item, 
                    comleted: !item.completed,
                };
            }
            return item;
        })
        );
    };
    const waitingHandler = () => {
        setTodos(todos.map(item => {
            if(item.id===todo.id){
                return{
                    ...item, 
                    waiting: !item.waiting,
                };
            }
            return item;
        })
        );
    };
    return (
        <div className="deal">
            <li className={`deal-item ${todo.comleted ? "completed" : '' } ${todo.waiting ? "waiting" : '' } `}
            >{text}</li>
            <button onClick={completeHandler}  className="completebtn">Complete</button>
            <button onClick={waitingHandler} className="waitingbtn">Wait</button>
            <button onClick={deleteHandler} className="deletebtn">Delete</button>
        </div>
    );
}
export default Todo