
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrilla = ({ categoria }) => {

  const {imagenes, estaCargando} = useFetchGifs( categoria )
  //console.log({imagenes})
  return (
    <>
      <h3>{categoria}</h3>
      {/* FORMA 1 */}
      
      { estaCargando == true ? <h2>Cargando...</h2> : null } 
      {/* FORMA 2 (if corto con una sola condicion) -> { estaCargando && <h2>Cargando...</h2>} */}
      {/* FORMA 3 -> <h4 className={`${estaCargando == true ? null : 'hidden'}`}>Cargando...</h4> */}
      
      <div className="card-grid">
        {imagenes.map(({id, title, url}) => 
          <GifItem key={id} title={title} url={url} />
        )}
      </div>

    </>
  );
};
