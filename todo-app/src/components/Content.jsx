import React from "react";
import ToDo from './Todo'

const Content = ({todos, setTodos}) => {

    return (
        <div className="todo__content">
            <ul className="todo__list">
                {todos.map(todo => (
                    <ToDo
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                    text={todo.text}
                    todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Content;


