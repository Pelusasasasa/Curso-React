import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';

export const AddTodo = ( {handleTodoAdd} ) => {

    const {description,onInputChange,onResetForm} = useForm({
        description: ''
    });

    const onFormSubmit = (e) =>{
        e.preventDefault();

        if (description.length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description,
            done:false
        }

        handleTodoAdd && handleTodoAdd(newTodo);
        onResetForm();
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type='text'
            placeholder='Que hay que hacer?'
            className='form-control'
            onChange={onInputChange}
            name='description'
            value={ description}
        />
        <button type='submit' className='btn btn-outline-primary mt-1'>Agregar</button>
    </form>
  )
}
