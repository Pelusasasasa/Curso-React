import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../__fixtures/authState";

describe('Pruebas en el auth Slice', () => {

    test('Debe de regresar el estado Inicial', () => { 
        expect( authSlice.getInitialState()).toEqual( initialState );
     });

});