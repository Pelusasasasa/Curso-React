import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'Valorant']);
    }

  return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>

        {/*Input*/}
        <AddCategory setCategories={setCategories}/>

        {/*Listado de Gif*/}
        <ol>
            { categories.map( category => (
                <li key={category}>{category}</li>
            )) }
        </ol>
            {/*GitItem*/}
    </>


  )
}