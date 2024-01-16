import { retornaArreglo } from "../../src/07-deses-arr";

describe('Destructuracion de arreglos', () => {
    test('Debe de retornar un string y un numero', () => {

        const [letter, numbers] = retornaArreglo();

        expect(letter).toBe('ABC');
        expect(numbers).toBe(123);

        expect(letter).toEqual( expect.any(String));
    });
});