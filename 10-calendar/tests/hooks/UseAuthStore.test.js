import { renderHook } from "@testing-library/react";
import { authSlice } from "../../src/store";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { Provider } from "react-redux";
import { configureStore, current } from "@reduxjs/toolkit";
import { initialState, notAuthenticatedState } from "../__fixtures/authState";
import { testUserCredentials } from "../__fixtures/testUser";
import { act } from "react";

const getMockStore = (  ) => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer
        },
        preloadedState: {
            auth: {...initialState}
        }
    })
}

describe(' Pruebas en el useAuthStore', () => {

    test('Debe de regresar los valores por defecto', () => { 

    const mockStore = getMockStore(initialState)        ;

    const { result } = renderHook(() => useAuthStore(), {
        wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
    });

    expect( result.current ).toEqual({
        errorMessage: undefined,
        status: 'checking',
        user: {},
        checkAuthToken: expect.any(Function),
        startLogin: expect.any(Function),
        startRegister: expect.any(Function),
        startLogOut: expect.any(Function),
    })

    });

    test('StartLogin debe de realizar el login correctamente', async() => { 
        localStorage.clear();
        const mockStore = getMockStore({...notAuthenticatedState})
        
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
        });

        await act(async () => {
            await result.current.startLogin( testUserCredentials );
        });

        const {errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: {uid: '6761c7a2e230890ac200565f', name: 'Agustin'}
        });

        expect( localStorage.getItem('token')).toEqual(expect.any(String));
        expect( localStorage.getItem('token-init-date')).toEqual(expect.any(String));

     })

})