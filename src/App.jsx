import { useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import World from "./components/World";
import Overlay from "./components/Overlay";

function App() {
  const [cameraX, setCameraX] = useState(-4);

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
      <World cameraX={cameraX} setCameraX={setCameraX} windowWidth={windowWidth}/>
      <Overlay cameraX={cameraX} setCameraX={setCameraX} />
    </>
  );
}

export default App;
