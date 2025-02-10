import { renderHook } from "@testing-library/react";
import { authSlice } from "../../src/store";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { Provider } from "react-redux";
import { configureStore, current } from "@reduxjs/toolkit";
import { initialState, notAuthenticatedState } from "../__fixtures/authState";
import { testUserCredentials } from "../__fixtures/testUser";
import { act } from "react";
import calendarApi from "../../src/api/calendarApi";

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
    beforeEach(() => {localStorage.clear();})

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

    });

    test('StartRegister debe de realizar un register correctamente', async() => {

        const newUser = {email: 'algo@google.com', password: 123456, name:' Testesr User 2'};
        const mockStore = getMockStore({...notAuthenticatedState})
        
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
        });

        const spy = jest.spyOn( calendarApi, 'post').mockResolvedValue({
            data: {
                ok: true,
                uid: '123456789',
                name: 'Test User',
                token: 'ALGUN-TOKEN'
            }
        });

        await act(async () => {
            await result.current.startRegister( newUser );
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: {name: 'Test User', uid: '123456789'}
        });

        spy.mockRestore();

    });

    test('StartRegister debe de fallar la creacion', async() => {

        const mockStore = getMockStore({...notAuthenticatedState})
        
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
        });


        await act(async () => {
            await result.current.startRegister( testUserCredentials );
        });
        // console.log("la data es: ", result.current)
        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: 'Un usuario existe con ese correro',
            status: 'not-authenticated',
            user: {}
        });
    });

    test('checkAuthToken debe de fallar si no hay token', async() => {
        const mockStore = getMockStore({...initialState})
        
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
        });

        await act(async () => {
            await result.current.checkAuthToken();
        });

        const {errorMessage, status, user} = result.current; 

        expect({errorMessage, status, user}).toEqual({
            errorMessage: undefined,
            status:'not-authenticated',
            user: {}
        });
        
    });

    test('checkAuthToken Debe de autenticar el usuario si hay un token', async() => { 
        const { data } = await calendarApi.post('/user', testUserCredentials);

        localStorage.setItem('token', data.token);
        
        const mockStore = getMockStore({...initialState})
        
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>{ children }</Provider>
        });

        await act(async() => {
            await result.current.checkAuthToken()
        });

        const { errorMessage, status, user } = result.current;
        console.log(result.current)
        // expect({ errorMessage, status, user }).toEqual({
        //     errorMessage: undefined,
        //     status: 'authenticated',
        //     user: {}
        // })
     })

})