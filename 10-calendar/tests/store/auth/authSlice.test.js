import { authSlice, clearErrorMessage, onChecking, onLogin, onLogout } from "../../../src/store/auth/authSlice";
import { authenticatedState, initialState } from "../../__fixtures/authState";
import { testUserCredentials } from "../../__fixtures/testUser";

describe('Pruebas en el auth Slice', () => {

    test('Debe de regresar el estado Inicial', () => { 
        expect( authSlice.getInitialState()).toEqual( initialState );
     });

    test('Debe de realizar un checking', () => { 

        const state = authSlice.reducer( initialState, onLogin( testUserCredentials ));
        const newState = authSlice.reducer( state, onChecking( ));

        expect( newState ).toEqual({
            status: 'checking',
            user: {},
            errorMessage: undefined
        });
    });
    test('Debe de realizar un login', () => { 

        const state = authSlice.reducer( initialState, onLogin( testUserCredentials ));

        expect( state ).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: undefined
        });
    });

    test('Debe de realizar nu logout', () => { 

        const state = authSlice.reducer( authenticatedState, onLogout() );

        expect( state ).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined
        });

     });

    test('Debe de realizar nu logout', () => { 
        const errorMessage = 'Credenciales no validas'
        const state = authSlice.reducer( authenticatedState, onLogout(errorMessage) );
        // console.log(state)

        expect( state ).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: errorMessage
        });

     });

     test('Debe de limpiar el mensaje de error', () => { 
        const errorMessage = 'Credenciales no validas';
        const state = authSlice.reducer( authenticatedState, onLogout(errorMessage));
        const newState = authSlice.reducer( state, clearErrorMessage());

        expect( newState.errorMessage ).toBe(undefined)
      })

});