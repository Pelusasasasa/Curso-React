import { render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <LoginPage>', () => { 

    const user = {
        id: 123,
        name: 'Pelusa',
        email: 'XXXXXXXXXXXXXXXX'
    }

    test('Debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={{user:null}}>

                <LoginPage />

            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');

        console.log(preTag)

    });

    test('Debe de llamar el setUser cuando se hace click', () => { 

        render(
            <UserContext.Provider value={{user}}>
                <LoginPage />
            </UserContext.Provider>)
        screen.debug()
        

    })

 })