import { useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import World from "./components/World";
import Overlay from "./components/Overlay";

function App() {
  const [currTab, setCurrTab] = useState(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <>
      <World currTab={currTab} windowWidth={windowWidth}/>
      <Overlay setCurrTab={setCurrTab} />
    </>
  );
}

export default App;
