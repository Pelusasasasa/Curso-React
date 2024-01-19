import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Boca Juniors']);

    const onAddCategory = (category) => {

        if (categories.includes(category)) return;

        setCategories([category,...categories]);
    };

    const resetCategory = () =>{
        setCategories([]);
    }

  return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>

        {/*Input*/}
        <AddCategory 
            // setCategories={setCategories}
            onNewCategory={onAddCategory}
            resetCategory={resetCategory}
        />

        { categories.map( category => (
            <GifGrid 
                key={category}
                category={category} 
            />
        ))}
    </>


  )
}