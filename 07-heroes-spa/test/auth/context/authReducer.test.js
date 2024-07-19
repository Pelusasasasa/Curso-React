import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el auth reducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer({logged:false},{});

        expect(state).toEqual({logged:false});
    });

    test('Debe de (Login) llamar el login autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload:{
                name: 'Juan',
                id: '123'
            }
        }

        const state = authReducer({logged:false},action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

    });

    test('Debe de (Logout) borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout,
        }

        const state = authReducer({logged:true, user:{name:'Juan', id:123}},action);

        expect(state).toEqual({logged:false, user:action.payload});
    })
});