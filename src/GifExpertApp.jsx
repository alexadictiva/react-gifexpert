// shortcut sfc para componente
// rafc para componente con cuerpo
// shortcut usf para useState
// shortcut sfc para componente
// shortcut imrse para importar React, useState, useEffect
// shortcut imr	para importar React
// shortcut imrc	para importar React / Component
// shortcut imrd	para importar ReactDOM
// shortcut imrs	para importar React / useState
// shorcut impt	para importar PropTypes

import React, { useState } from "react";
import {AgregarCategoria} from "./components/AgregarCategoria";
import { GifGrilla } from "./components/GifGrilla";


const APIKEY = "N1JZlhso6jGoLPUC30u1lnw4z1TJcGvM";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(['One punch']);

  const onAgregarCategoria = (nuevaCategoria) => {
    //categorias.push(nuevaCategoria)
    //console.log("gradon")

    /* Agrega el nuevo elemento al arreglo, el primer parametro es el nuevo elemento a agregar
    y el segundo parametro es el operador spread con el arreglo de categorias */

    //Aqui el nuevo elemento se agregará de primero
    /*
    Forma -> setCategorias(["Seilor Moon", ...categorias]);
    */

    /*
    Forma 2 -> setCategorias( cateloria =>[...cateloria, "nuevo elemento"])
    */

    /* 
    Aqui el nuevo elemento se agregará de ultimo
    Forma 3 -> setCategorias([...categorias, "Seilor Moon" ]);
    */
    if (categorias.includes(nuevaCategoria)) {
      /*
      condicion para si mi arreglo de categorias ya tiene la nueva
      categoria no haga nada
      */
      return
    } else {
      /*
      si no la tiene en lalista de categorias entonces la agrega
      */
      setCategorias([nuevaCategoria, ...categorias]);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AgregarCategoria
        /* setCategorias={setCategorias} */
        onNuevaCategoria={(event) => { onAgregarCategoria(event);}}
      />
      {/*<button onClick={onAddCategory}>Agregar</button>*/}
     
        {categorias.map((categoria) => 
          (
            <GifGrilla key={categoria} categoria={categoria}/>
           
          )
        )}
     
    </>
  );
};
