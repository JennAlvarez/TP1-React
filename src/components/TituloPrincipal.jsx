import React, { useState } from "react";

const TituloPrincipal = (props) => {
  
  const[fraseButton, setfraseButton] = useState("Hello my friend!")

  const cambiarFrase = () =>{
    console.log('desde button');
    setfraseButton('Hello my friend (from changed stated)!')
  }

  return (
    <>
      <h1>{fraseButton}</h1>
      <button onClick={cambiarFrase}>Click</button>
    </>
  );
};

export default TituloPrincipal;
