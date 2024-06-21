import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState = {
    logged: false
};

const init = ( ) => {
  const user =  JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({ children }) => {

    const [state, dispatch ] = useReducer(authReducer, initialState, init);


    const login = async( name = '') => {

      const user = { type: types.login, payload: name}

      const action = user;

      localStorage.setItem('user', JSON.stringify(name));

      dispatch(action);
    };

    const logout = async() => {
      localStorage.removeItem('user');

      const action = {
        type: types.logout
      };

      dispatch(action)
    }

  return (
    <AuthContext.Provider value={{
      ...state,
      login: login,
      logout: logout
    }}>
        { children }
    </AuthContext.Provider>
  )
}
