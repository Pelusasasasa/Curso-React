import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Probando el grif grid item', () => {

    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg';

    test('Haciendo match con  el snapchot', () => { 


        const {container} = <GifGridItem title={title} url={url}/>

        expect(container).toMatchSnapshot();

     });

     test('debe de mostrar la imagen con el url y el alt indicado', () => { 
        
        render( <GifGridItem title={ title } url={ url } />)
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( title );
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

      });

    test('debe demostrar el titulo del componenete', () => {
        
        render( <GifGridItem title={ title } url={ url } />)
        expect( screen.getByText(title) ).toBeTruthy();

     })


});