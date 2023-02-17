/**
* Obtiene un conjunto de gifs para una categoría dada
* @param {*} category 
* @returns 
*/
export const getGifs = async (category) => { 
    /* Solicitar los figs para esta categoría */
    const API_KEY = "eRH6kC0Ol2Sbqj1DNGdx2ALy8FV92KC5";    
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${category}&api_key=${API_KEY}`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    console.log(gifs);
    return gifs;
}