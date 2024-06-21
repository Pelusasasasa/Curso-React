import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({children}) => {

  const { logged } = useContext( AuthContext );
  const {pathname, search} = useLocation();

  const lasthPath = pathname + search;
  localStorage.setItem('lastPath', lasthPath);

  return (
    logged 
    ? children 
    : <Navigate to="/login" />
  )
}
