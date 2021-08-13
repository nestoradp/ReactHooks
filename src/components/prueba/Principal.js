import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


function Principal(props) {
    return (
        <div className={"container mt-4"}>
            <div className="row">
                <div className={"col-4"}>
                    <TodoList
                        todos={props.todos}
                        deleteTodos ={props.deleteTodos}
                        terminada ={props.terminada}
                        setTodoEdit={props.setTodoEdit}

                    />
                </div>
                 <div className="col-8">
                      <TodoForm
                      AddTodo = {props.AddTodo}
                      TodoEdit={props.TodoEdit}
                      UpdateTodo={props.UpdateTodo}
                      setTodoEdit={props.setTodoEdit}

                      />
                </div>


            </div>


        </div>


    );


}


export default Principal;