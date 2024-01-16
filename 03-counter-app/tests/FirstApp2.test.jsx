import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe(' haciendo pruebas en FirstApp', () => {

    const title = 'Hola Soy Goku';
    const subtitle = "Soy un subtitulo";

    test('Debe de hacer match con el snapshot', () => { 
        const {container}  = render( <FirstApp title={title} /> );

        expect(container).toMatchSnapshot();

     });

     test('Debe de mostarr el mensaje "Hola soy Goku"', () => { 
        render( <FirstApp title={title} /> );

        expect(screen.getByText(title)).toBeTruthy();
      })

      test('Debe de mostrar el titulo en un h1', () => {

        render( <FirstApp title={title} /> );
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain( title )

      });

      test('debe de mostrar el subtitilo pasado por props', () => { 
        render( <FirstApp title={title} subtitle={subtitle} />);
        expect(screen.getAllByAltText(subtitle))    


       })
})