import { getUser, getUsuarioActivo } from "../../src/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {
        const testUSer = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( testUSer ).toEqual( user );
     });

     test('getUsuario debe retornar un objeot', () => { 
        const name = 'Agustin';

        const usuario = getUsuarioActivo(name);

        const testUser = {
            uid: 'ABC567',
            username: 'Agustin'
        }

        expect( usuario.username ).toBe( name );

        expect( usuario ).toEqual( testUser);
      })

});