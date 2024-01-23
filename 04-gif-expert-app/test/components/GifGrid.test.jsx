import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en el gifGrid', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loadign inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGif', () => { 
        const gifs = [
            {
                id:'ABC',
                title:'Saitama',
                url: 'https://localhost/Saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/Goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });


        render( <GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);

     });

});