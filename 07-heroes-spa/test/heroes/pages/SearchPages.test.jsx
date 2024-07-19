const { render, screen, fireEvent } = require("@testing-library/react");
const { MemoryRouter, useNavigate } = require("react-router-dom");
const { SearchPage } = require("../../../src/heroes/pages/SearchPage");


const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en el <SearchPage />', () => {

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrarse con valores por defecto correctamente', () => { 

        const {container} = render( 
            <MemoryRouter>
                <SearchPage />
            </ MemoryRouter>
        );

        expect( container ).toMatchSnapshot();

     });


     test('Debe de mostrar a Batman y el input con el valor del queyString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        const img = screen.getByRole('img');

        expect( input.value ).toBe('batman');
        expect(img.src).toContain('http://localhost/assets/heroes/dc-batman.jpg');

        const alertDanger = screen.getByLabelText('alert-danger');

        expect( alertDanger.style.display ).toBe('none');
     });


     test('Debe de mostrar un error si no encuentra el hero (batman123)', () =>{
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('');
     })


     test('Debe de llamar al navigate a la pantalla nueva', () => {
            render(
                <MemoryRouter initialEntries={['/search']}>
                    <SearchPage/>
                </MemoryRouter>
            )

            const input = screen.getByRole('textbox');
            fireEvent.change(input, {target: {name: 'searchText', value: 'superman'}});

            const form = screen.getByRole('form');

            fireEvent.submit(form);

            expect( mockUseNavigate).toHaveBeenCalledWith('?q=superman')
     })

});