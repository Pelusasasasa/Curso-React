import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodo } from "../hooks";


export const TodoApp = () => {

    const {todos,onToggleTodo,handleNewTodo,handleDeleteTodo} = useTodo();

  return (
    <>
        <h1>Todo App 10, <small>Pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={onToggleTodo}/>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>

        
    </>
  )
}
