const { render, screen } = require("@testing-library/react");
const { AuthContext } = require("../../src/auth/context/AuthContext");
const { MemoryRouter } = require("react-router-dom");
const { AppRouter } = require("../../src/router/AppRouter");

describe('Prueas en el appRouter', () => {

    test(' Debe de mostrar el Login si no esta autenticado ', () => { 

        const contextValue = {
            logged: false
        }

        render(

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getAllByText('Login').length ).toBe(2);

     });

     test('Debe de mostrar el componente Marvel si esta Autenticado', () => { 
        
        const contextValue = {
            logged: true,
            user:{
                name: 'Strider',
                id: '123'
            }
        }

        render(

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
      })
});