import { usContext } from "../../src/06-deses-obj";

describe('Pruebas en la destructuracion de un objeto', ()=> {

    test('Probando destructuracion', () => {
        const personaTest = {
            nombre: 'Tony',
            edad: 45,
            nombreClave: 'Ironman',
            rango: 'Capitan',
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const obj = usContext({clave: 'Ironman',nombre: 'Tony',edad: 45,rango: 'Capitan'});

        expect(personaTest).toEqual(obj)
    });

});