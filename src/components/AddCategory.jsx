
import { useState } from 'react'

export const AddCategory = ( { addNewCategory }) => {
    
    const [inputValue, setInputValue] = useState("")
    
    const onInputChange= ( {target} ) => {
        setInputValue ( target.value );
    }
    
    const onSubmit = ( event ) => {
        event.preventDefault();

        // Algunas validaciones previas:
        if (inputValue.trim().length <= 1) return;
        addNewCategory(inputValue.trim());
        setInputValue("");
    }
    return (
        <form onSubmit={ onSubmit }>
        <input 
        type="text"
        value = { inputValue }
        placeholder='Buscar gifs' 
        onChange={onInputChange}
        />
        </form>
        
        )
    }
    