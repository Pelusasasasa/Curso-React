import { render } from "@testing-library/react";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { MemoryRouter } from "react-router-dom";
import { CalendarPage } from "../../src/calendar";

jest.mock("../../src/hooks/useAuthStore");

jest.mock('../../src/calendar', () => {
    CalendarPage: () => <h1>CalendarPage</h1>
});

describe('Pruebas en el <AppRouter />', () => {


    const mockCheckAuthToken = jest.fn();

    beforeEach(() => jest.clearAllMocks() );

    test(' Debe de mostrar en la pantalla de carga y llamar al checkauthToken', () => {

        useAuthStore.mockReturnValue({
            status: 'checking',
            checkAuthToken: mockCheckAuthToken
        });

        render( <AppRouter /> );

        expect( screen.getByText('Cargando...')).toBeTruthy();
        expect( mockCheckAuthToken ).toHaveBeenCalled();

    });

    test('Debe de mostrar el login en caso de no estar autenticado ', () => {

        useAuthStore.mockReturnValue({
            status: 'not-authenticated',
            checkAuthToken: mockCheckAuthToken
        });

        const { container } = render( 
        <MemoryRouter initialEntries={['/auth/al']}>
            <AppRouter />
        </MemoryRouter>
        );

        expect( screen.getByText('Ingreso').toBeTruthy() );
        expect(container).toMatchSnapshot();

    });

        test('Debe de mostrar calendario si estamos autenticados ', () => {

        useAuthStore.mockReturnValue({
            status: 'authenticated',
            checkAuthToken: mockCheckAuthToken
        });

        render( 
        <MemoryRouter initialEntries={['/auth/al']}>
            <AppRouter />
        </MemoryRouter>
        );

        expect( screen.getByText('CalendarPage').toBeTruthy() );
        

    });

});