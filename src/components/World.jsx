import React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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

function Plant() {
  const plant = useGLTF("/colocasia_potted/scene.gltf");
  plant.scene.scale.set(35, 35, 35);
  plant.scene.position.set(-1, -1, 0);

  plant.scene.traverse(function (node) {
    if (node.isMesh) node.castShadow = true;
  });

  const thisRef = React.useRef();

  useFrame(() => {
    if (thisRef.current) {
      thisRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={thisRef} object={plant.scene} />;
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

function Cpu() {
  const cpu = useGLTF("/cpu/scene.gltf");
  cpu.scene.scale.set(0.13, 0.13, 0.13);
  cpu.scene.position.set(7, 0, 0);
  cpu.scene.rotation.set(Math.PI / 2, 0, 0);

  cpu.scene.traverse(function (node) {
    if (node.isMesh) node.castShadow = true;
  });

  const thisRef = React.useRef();

  useFrame(() => {
    if (thisRef.current) {
      thisRef.current.rotation.z += 0.01;
    }
  });

  return <primitive ref={thisRef} object={cpu.scene} castShadow />;
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

function Piano() {
  const piano = useGLTF("/piano/scene.gltf");
  piano.scene.scale.set(0.18, 0.18, 0.18);
  piano.scene.position.set(15, -1, 0);

  piano.scene.traverse(function (node) {
    if (node.isMesh) node.castShadow = true;
  });

  const thisRef = React.useRef();
  useFrame(() => {
    if (thisRef.current) {
      thisRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={thisRef} object={piano.scene} castShadow />;
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
    <Canvas shadows style={{ position: "fixed", height: "100vh" }}>
      {/* <OrbitControls /> */}
      <ThisCamera cameraX={cameraX} setCameraX={setCameraX} />
      <ambientLight intensity={0.1} />
      <pointLight castShadow position={[0, 2, 0]} />
      <SkySphere />
      <Plane />
      {/* <Box /> */}
      <Plant />
      {/* <Ball /> */}
      <Cpu />
      {/* <Ring /> */}
      <Piano />
    </Canvas>
  );
}

export default World;
