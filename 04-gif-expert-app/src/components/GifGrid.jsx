import { getGifs } from "../helpres/getGifs"

export const GifGrid = ({category}) => {
    getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <p>hola Mundo</p>
        </>
  )

}