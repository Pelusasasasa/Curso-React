import { useState } from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {
  
  const {description,onInputChange,resetForm} = useForm({
    description: ''
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length >= 1) {
      onNewTodo({
        id: new Date().getTime(),
        description: description,
        done: false,
      });

      resetForm();
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
        <input 
        type="text"
         name='description'
         value={description}
         onChange={onInputChange}
          placeholder="¿Que hay que hacer?" className="form-control"/>
        <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
    </form>
  )
}
