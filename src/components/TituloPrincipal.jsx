import React, { useState } from "react";

const TituloPrincipal = (props) => {
  
  const[fraseButton, setfraseButton] = useState("Hello my friend!")

  const cambiarNombre = () =>{
    console.log('desde button');
    setfraseButton('Hello my friend (from changed stated)!')
  }

  return (
    <>
      <h1>{fraseButton}</h1>
      <button onClick={e => cambiarNombre('Hello my friend (from changed state)!')}>Click</button>
    </>
  );
};

export default TituloPrincipal;
