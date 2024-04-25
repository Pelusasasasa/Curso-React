import { UserContext } from "./UserContext"

const user = {
    name: 'Agustin',
    password: '1234',
    email: 'XXXXXXXXXXXXXXXXX'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ Hola: 'Hola Mundo', user: user}}>
        { children }
    </UserContext.Provider>
  )
}
