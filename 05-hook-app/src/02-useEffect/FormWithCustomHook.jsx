import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
    const {formState,username,email,password,onInputChange,resetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username,email,password} = formState;


  return (
    <>
        <h1>Formulario Custom Hooj</h1>
        <hr />

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input
         type="email"
         name="email"
         placeholder="Agustinlorenzatto@gmail.com"
         className="form-control mt-2"
         value={email}
         onChange={onInputChange}
        />

        <input
         type="password"
         name="password"
         placeholder="Contraseña"
         className="form-control mt-2"
         value={password}
         onChange={onInputChange}
        />

        <button className="btn btn-primary" onClick={resetForm}>Reset</button>

         {
            username == 'strider2' && <Message />
         }
    </>

    
  )
};