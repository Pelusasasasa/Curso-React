import { getSaludo } from "../../src/02-template-string";

describe('Pruebas en el 02-template-string', () => {

    test('getSaludo debe retornar "Hola Ferndando"', () => { 

        const name = 'Fernando';
        const message = getSaludo( name );

        expect(message).toBe(`Hola ${ name }`);

     });

});