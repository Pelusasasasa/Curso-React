import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'agustinLorenzatto@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    };

    useEffect( () => {
        // console.log('useEffect')
    },[]);

    useEffect( () => {
        // console.log('FormState Changed')
    },[formState]);
    
    useEffect( () => {
        // console.log('email Changed')
    },[formState.email]);

    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={formState.username}
            onChange={onInputChange}
        />

        <input
         type="email"
         name="email"
         placeholder="AgustinLorenzatto@gmail.com"
         className="form-control mt-2"
         value={formState.email}
         onChange={onInputChange}
         />

         {
            username == 'strider2' && <Message />
         }
    </>

    
  )
};