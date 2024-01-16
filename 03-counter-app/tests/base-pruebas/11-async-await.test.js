import { getImagen } from "../../src/11-async-await";

describe('Haciendo pruebas con async-await', () => {

    test( 'getImagen debe de retornar la URL de la imagen', async() => { 
        const url = await getImagen();
        expect( typeof url ).toBe('string');
     });

});