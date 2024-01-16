import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe(' haciendo pruebas en FirstApp', () => {

    test('Debe de hacer match  co el snapshot', () => {
        const title = 'Hola, soy Goku';
        const { container } = render( <FirstApp title={title}/> )
        
        // expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el titulo en un h1', () => { 

        const title = 'Hola, soy Goku';
        const { container, getByText,getByTestId } = render( <FirstApp title={title}/> )
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain(title);

        expect( getByTestId('test-title').innerHTML ).toBe( title );

     });

     test('Debe d mostrar el subtitulo enviado por props', () => {
        const subtitle = 123;
        const title = 'Hola, soy Goku';
        const { container, getByText,getByTestId } = render( <FirstApp title={title} subtitle={subtitle}/> )

        expect( getByText(subtitle) ).toBeTruthy();

     })

})