import TituloPrincipal from "./components/TituloPrincipal";
import React, {useState} from "react";



function App() {
  const titulo = 'Hello my friend!'
  let [frase, setFrase] = useState('(from changed state)')
 
  return (
    <>
      <TituloPrincipal tituloNuevo={titulo} fraseNueva={frase}/>
    </>
  );
}

export default App;
