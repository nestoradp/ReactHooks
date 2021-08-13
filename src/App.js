import Principal from "./components/prueba/Principal";
import {useState} from "react";
const todos =[
    {
        id:1,
        title:"Todo#1",
        description: "Descr. Todo 1",
        completed: true

    },

    {
        id:2,
        title:"Todo#2",
        description: "Descr. Todo 2",
        completed: false

    },
    {
        id:3,
        title:"Todo#3",
        description: "Descr. Todo 3",
        completed: false

    }

];

function App() {
    const [ListTodos, setlistTodos] = useState(todos);
    const [TodoEdit, setTodoEdit] = useState(null);

    const deleteTodos = (id)=>{
       if(TodoEdit.id ===id){
           setTodoEdit(null);
       }

      const lTodos = ListTodos.filter(todo => todo.id!== id);

      setlistTodos(lTodos);
    }

    const terminada =(id)=>{
     const todoterminada=   ListTodos.map(todo =>(
            todo.id ===id ?
                {...todo ,completed : !todo.completed}
               :todo

        ))

        setlistTodos(todoterminada);

    }

   const todoAdd = (todo) =>{
        const newTodo = {
           id: Date.now(),
            ...todo,
            completed: false

        }

        const changeTodo =[
            ...ListTodos,
            newTodo
       ]
           setlistTodos(changeTodo);

   }
      const UpdateTodo =(TodoEdit)=>{
        const changeTodo = todos.map(todo =>(
            todo.id ===TodoEdit.id ? TodoEdit
                : todo


        ))

        setlistTodos(changeTodo);
      }

  return (
    <div className="App">
      <Principal
          todos={ListTodos}
          deleteTodos={deleteTodos}
          terminada={terminada}
          AddTodo ={todoAdd}
          setTodoEdit={setTodoEdit}
           TodoEdit={TodoEdit}
           UpdateTodo={UpdateTodo}
      />
  
    </div>
  );
}

export default App;
