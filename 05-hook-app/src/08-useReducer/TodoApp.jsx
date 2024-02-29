import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./Components/TodoList";
import { AddTodo } from "./Components/AddTodo";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recoletar la piedra del alma',
        done:false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recoletar la piedra del poder',
        done:false
    },
];



export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleTodoAdd = ( todo ) => {
        console.log( todo )
    }

  return (
    <>
        <h1>TodoApp 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList  todos={todos}/>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />

                <AddTodo handleTodoAdd={handleTodoAdd}/>
            </div>
        </div>

    </>
  )
}
