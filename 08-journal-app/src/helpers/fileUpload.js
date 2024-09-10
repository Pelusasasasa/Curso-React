export const fileUpload = async( file ) => {

    if ( !file ) throw new Error('No hay ningun archivo a subir');

    const cloundURL = `https://api.cloudinary.com/v1_1/dyo36foif/upload`;

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        
        const res = await fetch(cloundURL, {
            method: 'POST',
            body: formData
        });


        if (!res.ok) throw new Error('No se pudo subir la imagen');

        const cloudResp = await res.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error.message)
        throw new Error(error.message);
    }

}