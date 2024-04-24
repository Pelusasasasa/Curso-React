export const TodoItem = ({id,description, onDeleteTodo}) => {


  return (
    <li id={id} className="list-group-item d-flex justify-content-between">
        <span className="aling-self-center">{description}</span>
        <button onClick={() => onDeleteTodo(id)} className="btn btn-danger">Borrar</button>
    </li>
  )
}
