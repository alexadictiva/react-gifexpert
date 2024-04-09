import { useState } from "react";

export const AgregarCategoria = ({ onNuevaCategoria }) => {
  const [inputValue, setInputValue] = useState("");

  /*
      //forma NORMAL
    const cambioEnInput = (event) => {
        setInputValue(event.target.value)
      // console.log(event.target.value)
      }
  */

  //con DESESTRUCTURACION:

  const cambioEnInput = ({ target }) => {
    setInputValue(target.value);
    //console.log(target.value)
  };

  const envio = (event) => {
    //console.log(event.target)
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      /* esto sirve para que no se mande nada 
      vacio o con espacios en blanco*/
      return;
    } else {
      //setCategorias((categorias)=>[inputValue, ...categorias])
      onNuevaCategoria(inputValue.trim().toLowerCase());
      setInputValue("");
    }
  };
  return (
    <form onSubmit={envio}>
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={cambioEnInput}
      />
    </form>
  );
};

 
