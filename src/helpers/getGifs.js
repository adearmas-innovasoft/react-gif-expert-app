
export const getGifs = async (category) => {
    const api_key = 'PG8MHLHOGDsnO8rOW0n5XtkqjRtqP6wM';
    
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ encodeURI( category ) }&limit=10`
        
        const resp = await fetch(url);
        const {data} = await resp.json();

        console.log(data);

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
                h: img.images.downsized_medium.height,
                w:img.images.downsized_medium.width
            }
        })
        return gifs;
}
