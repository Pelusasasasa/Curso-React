const { render, screen } = require("@testing-library/react")
const { AuthContext } = require("../../src/auth/context/AuthContext")
const { PublicRouter } = require("../../src/router/PublicRouter");
const { MemoryRouter, Routes, Route } = require("react-router-dom");

describe(' Pruebas en el pulic Route', () => {

    test('Debe de mostrar el children si no esta autenticado', () => { 

        const contextValue = {
            logged: false
        };

        render(
            <AuthContext.Provider value={ contextValue}>
                <PublicRouter>
                    <h1>Ruta Publica</h1>
                </PublicRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Publica')).toBeTruthy(); 

     });

     test(' Debe de Navegar si esta autenticado ', () => {

        const contextValue = {
            logged: true,
            user:{
                name: 'Strider',
                id: '123'
            }
        };

        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRouter>
                                <h1>Ruta Publica</h1>
                            </PublicRouter>
                        } />

                        <Route path='marvel' element={<h1>Pagina Marver</h1>} />

                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider>
        );


        expect( screen.getByText('Pagina Marver') ).toBeTruthy();

     })

})