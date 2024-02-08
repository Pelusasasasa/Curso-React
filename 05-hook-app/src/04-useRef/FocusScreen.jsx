import { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

         <input
            ref={inputRef}
            type="text"
            placeholder='Ingrese Su Nombre'
            className='form-control'
        />

         <button 
          onClick={ () => {inputRef.current.select()}}
          className='btn btn-primary mt-2'>Set Focus</button>
    </>
  )
}
