
export const getImagen = async() => {

    try {

        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data;
        console.log("AAAAAAA")
        console.log(url)
        return url;

    } catch (error) {
        // manejo del error
        console.error(error)

        return 'No se encontro la imagen';
    }
    
    
    
}

 getImagen();



