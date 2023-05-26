import React from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Plane() {
  return (
    <mesh receiveShadow position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="white" />
    </mesh>
  );
}

function SkySphere() {
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[60, 32, 16]} />
      <meshLambertMaterial attach="material" color="lightblue" side={1} />
    </mesh>
  );
}

function Box() {
  const thisRef = React.useRef();

  useFrame(() => {
    if (thisRef.current) {
      thisRef.current.rotation.y += 0.01;
      thisRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={thisRef} castShadow rotation={[Math.PI / 4, 0, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Ball() {
  const thisRef = React.useRef();

  useFrame(() => {
    if (thisRef.current) {
      thisRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh castShadow position={[8, 0, 0]}>
      <sphereBufferGeometry attach="geometry" args={[0.75, 32, 16]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

function Ring() {
  const thisRef = React.useRef();

  useFrame(() => {
    if (thisRef.current) {
      thisRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={thisRef}
      castShadow
      rotation={[0, Math.PI / 2, 0]}
      position={[16, 0, 0]}
    >
      <torusBufferGeometry args={[0.4, 0.15, 16, 100]} />
      <meshLambertMaterial attach="material" color="orange" />
    </mesh>
  );
}

function ThisCamera({ cameraX, setCameraX }) {
  const thisRef = React.useRef();
  const [actX, setActX] = React.useState(-4);
  useFrame(() => {
    if (thisRef.current) {
      let calc = Math.abs(cameraX - thisRef.current.position.x);
      if (!(calc < 0.2)) {
        if (cameraX > thisRef.current.position.x) {
          setActX(actX + (cameraX - actX) / 15);
        } else {
          setActX(actX - (actX - cameraX) / 15);
        }
      }
    }
  });

  return (
    <PerspectiveCamera
      makeDefault
      ref={thisRef}
      position={[actX, 0, -1]}
      rotation={[0, -Math.PI / 2, 0]}
    />
  );
}

function World({ cameraX, setCameraX }) {
  return (
    <Canvas
      colorManagement
      shadows
      style={{ position: "fixed", height: "100vh" }}
    >
      {/* <OrbitControls /> */}
      <ThisCamera cameraX={cameraX} setCameraX={setCameraX} />
      <ambientLight intensity={0.1} />
      <pointLight castShadow position={[0, 2, 0]} />
      <SkySphere />
      <Plane />
      <Box />
      <Ball />
      <Ring />
    </Canvas>
  );
}

export default World;
