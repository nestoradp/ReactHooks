import React, {useState} from 'react';
import Todo from "./todo";






function TodoList({todos, deleteTodos,terminada,setTodoEdit}) {
    console.log(todos);

    return (
        <div>
            <h1>Soy TodoList</h1>

            {
                todos.map(todo => (
                    <Todo todo={todo}
                          key={todo.id}
                          deleteTodos ={deleteTodos}
                          terminada ={terminada}
                          setTodoEdit={setTodoEdit}
                    />


                ))


            }

        </div>
    )
}

export default TodoList;

