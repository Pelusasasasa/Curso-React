import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Haciendo pruebas en el counter app', () => {

    const valorInicial = 10;

    test('haciendo match con el snatpchot', () => {

        const  {container} = render(<CounterApp value={valorInicial} />)
        expect( container ).toMatchSnapshot();

        expect(screen.getByText(10)).toBeTruthy();

    });


    test('Debe de incrementar con el boton mas uno', () => {

        render(<CounterApp value={valorInicial} />);
        fireEvent.click(screen.getByText('+1'));
        expect( screen.getByText('11')).toBeTruthy();
    });


    test('Debe de decrementar con el boton menos uno', () => {

        render(<CounterApp value={valorInicial} />);
        fireEvent.click(screen.getByText('-1'));
        expect( screen.getByText('9')).toBeTruthy();
        
    });

    test('Debe de funcionar el boton de reset', () => {

        render(<CounterApp value={valorInicial} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        expect( screen.getByText(valorInicial)).toBeTruthy();

    });

});