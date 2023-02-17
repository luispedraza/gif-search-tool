import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([]);
    
    const addCategory = ( newCategory ) => {
        // Validamos nombres únicos
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    
    return (
        <>
            <h1>Gif Expert App</h1>
            
            <AddCategory addNewCategory = { addCategory }/>
            
            { categories.map( cat => (
                <GifGrid 
                key={cat} 
                category={cat}/>
                ))
            }
                
        </>
        
        )
    }
    