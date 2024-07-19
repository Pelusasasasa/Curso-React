import { types } from "../../../src/auth/types/types"

describe(' Pruebas en "Types.js"', () => {


    test('Debe de regresar estoys types', () => {
         
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
     })

})