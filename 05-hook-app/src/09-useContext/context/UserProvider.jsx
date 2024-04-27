import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     name: 'Agustin',
//     password: '1234',
//     email: 'XXXXXXXXXXXXXXXXX'
// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
