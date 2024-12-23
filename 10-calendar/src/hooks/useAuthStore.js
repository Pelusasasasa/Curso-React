import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";


export const useAuthStore = () => {

    const dispatch = useDispatch();
    const {status, user, errorMessage} = useSelector( state => state.auth);

    const startLogin = async({email, password}) => {
        dispatch( onChecking() );

        try {
            const {data} = await calendarApi.post('user', {email, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({name: data.name, uid: data.uid}) ); 
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10);
        }
    };

    const startRegister = async({name, email, password}) => {
        try {
            const { data } = await calendarApi.post('user/new', {name, email, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({name: data.name, uid: data.uid}) );
        } catch (error) {
            console.log(error)
            dispatch( onLogout(error.response?.data.msg || 'Credenciales incorrectas'));
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10);
        }
    };


    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch( onLogout());

        try {
            const { data } = await calendarApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({name: data.name, uid: data.uid}) ); 
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout());
        }
    };

    const startLogOut = async() => {
        localStorage.clear();
        dispatch( onLogout());
    }

    return {
        //* Propiedades
        errorMessage,
        status,
        user,


        //* Metodos
        checkAuthToken,
        startLogin,
        startRegister,
        startLogOut
    }

}