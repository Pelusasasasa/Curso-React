
// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        edad,edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        },
        nombre,
        rango
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = usContext( persona );


