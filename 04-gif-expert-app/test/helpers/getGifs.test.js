import { getGifs } from "../../src/helpres/getGifs";

describe( 'Pruebas en el getGifs ', () => {

    test('Debe de retornar un arreglo de gifs', async() => { 

        const gifs = await getGifs('One Puch');
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })

     })

});