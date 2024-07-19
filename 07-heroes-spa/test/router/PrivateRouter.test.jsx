import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRouter } from "../../src/router/PrivateRouter";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el <PublicRouter>', () => {

    test('Debe de mostrar el children si esta autenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user:{
                name: 'Javier',
                id: '123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRouter>
                        <h1>Ruta Privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled();
    });



});