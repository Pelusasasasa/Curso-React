import { fileUpload } from "../../src/helpers/fileUpload";

describe(' Pruebas en FileUpload', () => {
    test('Debe de subir el archivo correctamente', async() => { 

        const imageURL = 'https://th.bing.com/th/id/OIP.--iNuz4yLO-MW5q5FpZ_SwHaEK?rs=1&pid=ImgDetMain';
        const res = await fetch( imageURL );
        const blob = await res.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );

        expect(typeof url).toBe('string');
     })
})