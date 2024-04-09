import {useState, useEffect } from "react";
import { obtenerGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [imagenes, setImagenes] = useState([])
  const [estaCargando, setIsCargando] = useState(true)
  //console.log(cargando)

  const getImagenes = async ()=>{
    const newImagenes = await obtenerGifs(categoria)
    setImagenes(newImagenes)
    setIsCargando(false)
  }
  
  useEffect(()=>{
    getImagenes();
  },[])


  return {
    imagenes,
    estaCargando
  }
}


