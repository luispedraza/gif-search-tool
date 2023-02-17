import { useState, useEffect } from "react";
import { getGifs } from "../helpers/giphyApi";

export const useFetchGifs = ( category ) => {
    // Almacenamos en el estado las imágenes:
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getGifs( category ).then((images) =>
        {
            setImages(images);
            setIsLoading(false);
        } );
    }, [])
    

    return {
        images,
        isLoading
    }
}
