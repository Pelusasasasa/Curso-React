export const TodoItem = ({todo:{id, description, done}, onDeleteTodo, onToggleTodo}) => {


  return (
    <li id={id} className="list-group-item d-flex justify-content-between">
        <span aria-label="span" onClick={() => onToggleTodo(id)} className={`align-self-center ${done && 'text-decoration-line-through'}`}>{description}</span>
        <button aria-label="button" onClick={() => onDeleteTodo(id)} className="btn btn-danger">Borrar</button>
    </li>
  )
}
