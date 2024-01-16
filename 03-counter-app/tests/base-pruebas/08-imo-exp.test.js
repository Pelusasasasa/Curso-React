import { getHeroeById, getHeroesByOwner } from "../../src/08-imp-exp"

describe('Pruebas en 08-imp', () => {

    test('Retornar un hero por el id', () => { 

        const id = 1;

        const heroe = getHeroeById(id);
        
        expect(heroe).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );

     });

     test('Retornar un heroe que no existe', () => { 

        const id = 100;

        const heroe = getHeroeById(id);
        
        expect(heroe).toBeFalsy();

     });

     test('Debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';

        const heroesDC = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
            
        ];
        

        const arreglo = getHeroesByOwner(owner);
        
        expect(arreglo.length).toBe(3);

        expect(arreglo).toEqual(heroesDC);
     });

     test('Debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';

        const heroesMarvel = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ];

        const arreglo = getHeroesByOwner(owner);
        
        expect(arreglo.length).toBe(2);

        expect(arreglo).toEqual(heroesMarvel);

     })

})