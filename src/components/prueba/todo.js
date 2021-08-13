import React from 'react';

function Todo({todo, deleteTodos, terminada, setTodoEdit   }) {

    return (
        <div>
            <div className="card mt-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col 6">
                            <h3 className="card-title">{todo.title} </h3>
                        </div>
                        <div className="col-6">

                            <button type="button"
                                    className={` btn  btn-sm align-content-end ${todo.completed ? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => terminada(todo.id)}>
                                {todo.completed ? 'Terminado' : 'Terminar'}


                            </button>
                        </div>
                        <p className={"card-text"}>
                            {todo.description}

                        </p>
                        <hr/>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn   btn-outline-success m-lg-1  "    onClick={()=>setTodoEdit(todo)}>Editar</button>
                            <button type="button" className="btn    btn-outline-danger m-lg-1 " onClick={() => deleteTodos(todo.id)}>Eliminar
                            </button>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default Todo;


