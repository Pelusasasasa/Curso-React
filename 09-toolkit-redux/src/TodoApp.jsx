import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todoApi"

export const TodoApp = () => {
    const [todoId, setTodoId] = useState(1)
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading } = useGetTodoQuery(todoId);
    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId( todoId - 1);
    }

    const nextTodo = () => {
        setTodoId( todoId + 1);
    }



  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />

        <h4>Loading: { isLoading ? 'True' : 'False' }</h4>
        <pre>{JSON.stringify(todo)}</pre>

        {/* <ul>
            {
                todos.map( todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'DONE' : 'PENDING '} </strong>
                        {todo.title}
                    </li>
                ))
            }
        </ul> */}


        <button onClick={() => prevTodo()}>Prev Todo</button>
        <button onClick={() => nextTodo()}>Next Todo</button>
    </>
  )
}
