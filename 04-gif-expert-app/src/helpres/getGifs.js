export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=2pn5YpKp47DQywZy4NpidWL0sg9Yq4IB&limit=1&q=${ category }`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ));
    console.log(gifs)
    return gifs;
}
