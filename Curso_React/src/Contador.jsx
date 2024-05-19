import React from 'react'

export function Contador() {

    const funcion = () =>{
        return(
            console.log("Soy un boton")
        );
    }

  return (
    <div>
        <button onClick={funcion}> Presioname </button>
    </div>
  )
}

export default Contador