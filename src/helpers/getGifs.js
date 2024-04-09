export const obtenerGifs = async (categoria) => {
  const api_key = "N1JZlhso6jGoLPUC30u1lnw4z1TJcGvM";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=4`;
  const respuesta = await fetch(url);
  //console.log(respuesta);
  const { data } = await respuesta.json();
  /*  console.log(data)
  console.log(data.id)
  console.log(data.url) */

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

 // console.log(gifs);
  return gifs
};
