import { useState } from "react";
import { useFrame } from "react-three-fiber";
import World from "./components/World";
import Overlay from "./components/Overlay";

function App() {
  const [cameraX, setCameraX] = useState(-4);

  return (
    <>
      <World cameraX={cameraX} setCameraX={setCameraX} />
      <Overlay cameraX={cameraX} setCameraX={setCameraX} />
    </>
  );
}

export default App;
