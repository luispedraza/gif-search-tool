import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridElement } from "./GifGridElement";


/*
Rejilla de resultados para una categoría concreta
*/
export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
        <h3>{ category }</h3>
        {
            isLoading && <h2>Cargando...</h2> 
        }
        
        <div className="card-grid">
        {
            images.map( (image) => (
                <GifGridElement {...image} key={image.id} />
                ))}
        </div>
        </>
    )
}
            
            
            