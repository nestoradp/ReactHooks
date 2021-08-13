import React, {useEffect, useState} from 'react';
import Todo from "./todo";

const initialFormValues ={
    title: '',
    description: ''

}


function TodoForm({AddTodo ,TodoEdit, UpdateTodo, setTodoEdit}) {
    const [FormTodo, setFormTodo] = useState(initialFormValues);
    const {title, description} = FormTodo;
    const [error, setError] = useState(null);
    const [Msucess, setMsucess] = useState(null);

    useEffect(() => {
        if (TodoEdit) {
            setFormTodo(TodoEdit)
        }
        else{
            setFormTodo(initialFormValues)
        }


    }, [TodoEdit])

    const HandleInputChange = (e) => {
        const changeFormValue = {
            ...FormTodo,
            [e.target.name]: e.target.value
        }
        setFormTodo(changeFormValue);
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') {
            setError("The title can not is empty");
            return;
        }
        if (description.trim() === '') {
            setError("The description can not is empty");
            return;
        }

        if (TodoEdit) {
            UpdateTodo(FormTodo);
            setFormTodo(initialFormValues);
            setMsucess("the todo is update sucess");
            setTimeout(() => {
                setMsucess(null)
            }, 1500)
            setError(null);

        } else {
            AddTodo(FormTodo);
            setFormTodo(initialFormValues);
            setMsucess("the todo is add sucess");
            setTimeout(() => {
                setMsucess(null)
            }, 1500)
            setError(null);
        }
    }


    const HandleCloseEdition = () => {
        setTodoEdit(null);
    }

    return (
        <div>
              <h1 className="text-center"> {TodoEdit ? 'Editar Tarea' : 'Ingresar Tarea'}</h1>
           <form onSubmit={HandleSubmit}>
               { TodoEdit &&
                   <button className="btn btn-warning mt-2" onClick={HandleCloseEdition}> Cancelar Edicion   </button>
               }


               <input
                   type="text"
                   placeholder="Title"
                   className="form-control mt-2"
                   value={title}
                   name="title"
                   onChange={HandleInputChange}
               />

               <textarea

                   placeholder="Descripction"
                   className="form-control mt-4"
                   value={description}
                   name="description"
                   onChange={HandleInputChange}

               />


                    <div className="d-flex justify-content-end">
                   <button className="btn btn-success mt-2 align-content-center">{TodoEdit ? 'Actualizar Tarea' : 'Agregar Tarea'} </button>

                    </div>

           </form>

            <div className="alert-danger mt-2">
                {error}

            </div>
            <div className="alert-success mt-2">
                {Msucess}

            </div>

        </div>
    );
}

export default TodoForm;