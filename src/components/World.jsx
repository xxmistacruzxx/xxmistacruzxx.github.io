import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Plane({ currTab }) {
  // colorhex/string, r, g, b
  const colors = [
    [0x30ff6b, 0.18823529411764706, 1, 0.4196078431372549],
    [0xffffff, 1, 1, 1],
    [0x383838, 0.2196078431372549, 0.2196078431372549, 0.2196078431372549],
  ];
  const thisRef = React.useRef();

  useFrame(() => {
    if (thisRef.current) {
      let calcR = Math.abs(colors[currTab][1] - thisRef.current.color.r);
      let calcG = Math.abs(colors[currTab][2] - thisRef.current.color.g);
      let calcB = Math.abs(colors[currTab][3] - thisRef.current.color.b);
      if (!(calcR < 0.001)) {
        if (colors[currTab][1] > thisRef.current.color.r) {
          thisRef.current.color.r = thisRef.current.color.r + calcR / 12;
        } else {
          thisRef.current.color.r = thisRef.current.color.r - calcR / 12;
        }
      }
      if (!(calcG < 0.001)) {
        if (colors[currTab][2] > thisRef.current.color.g) {
          thisRef.current.color.g = thisRef.current.color.g + calcG / 12;
        } else {
          thisRef.current.color.g = thisRef.current.color.g - calcG / 12;
        }
      }
      if (!(calcB < 0.001)) {
        if (colors[currTab][3] > thisRef.current.color.b) {
          thisRef.current.color.b = thisRef.current.color.b + calcB / 12;
        } else {
          thisRef.current.color.b = thisRef.current.color.b - calcB / 12;
        }
      }
    }
  });
  return (
    <mesh receiveShadow position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial
        attach="material"
        ref={thisRef}
        color={colors[0][0]}
      />
    </mesh>
  );
}

function SkySphere({ currTab }) {
  // colorhex/string, r, g, b
  const colors = [
    [0x6eeeff, 0.15592646369776456, 0.85499260812105, 1],
    ["lightblue", 0.4178850708380236, 0.6866853124288865, 0.7912979403281553],
    [0x1a2324, 0.010329823026364548, 0.01680737574872402, 0.01764195448412081]
  ];
  const thisRef = React.useRef();

  useFrame(() => {
    if (thisRef.current) {
      let calcR = Math.abs(colors[currTab][1] - thisRef.current.color.r);
      let calcG = Math.abs(colors[currTab][2] - thisRef.current.color.g);
      let calcB = Math.abs(colors[currTab][3] - thisRef.current.color.b);
      if (!(calcR < 0.001)) {
        if (colors[currTab][1] > thisRef.current.color.r) {
          thisRef.current.color.r = thisRef.current.color.r + calcR / 12;
        } else {
          thisRef.current.color.r = thisRef.current.color.r - calcR / 12;
        }
      }
      if (!(calcG < 0.001)) {
        if (colors[currTab][2] > thisRef.current.color.g) {
          thisRef.current.color.g = thisRef.current.color.g + calcG / 12;
        } else {
          thisRef.current.color.g = thisRef.current.color.g - calcG / 12;
        }
      }
      if (!(calcB < 0.001)) {
        if (colors[currTab][3] > thisRef.current.color.b) {
          thisRef.current.color.b = thisRef.current.color.b + calcB / 12;
        } else {
          thisRef.current.color.b = thisRef.current.color.b - calcB / 12;
        }
      }
    }
  });

  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[60, 32, 16]} />
      <meshLambertMaterial
        attach="material"
        ref={thisRef}
        color={colors[0][0]}
        side={1}
      />
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

function Cpu() {
  const cpu = useGLTF("/cpu/scene.gltf");
  cpu.scene.scale.set(0.13, 0.13, 0.13);
  cpu.scene.position.set(7, 0, 0);

  cpu.scene.traverse(function (node) {
    if (node.isMesh) node.castShadow = true;
  });

  const thisRef = React.useRef();

  useFrame(() => {
    if (thisRef.current) {
      thisRef.current.rotation.z += -0.01;
      thisRef.current.rotation.x = Math.PI / 2;
    }
  });

  return <primitive ref={thisRef} object={cpu.scene} />;
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

function ThisCamera({ currTab, windowWidth }) {
  const positions = [-4, 4, 12];

  const thisRef = React.useRef();
  const [actX, setActX] = React.useState(-4);
  const [actZ, setActZ] = React.useState(-1);

  useFrame(() => {
    if (thisRef.current) {
      let calc = Math.abs(positions[currTab] - thisRef.current.position.x);
      if (!(calc < 0.2)) {
        if (positions[currTab] > thisRef.current.position.x) {
          setActX(actX + (positions[currTab] - actX) / 15);
        } else {
          setActX(actX - (actX - positions[currTab]) / 15);
        }
      }
    }
    if (windowWidth < 600) {
      setActZ(0);
    } else {
      setActZ(-1);
    }
  });

  return (
    <PerspectiveCamera
      makeDefault
      ref={thisRef}
      position={[actX, 0, actZ]}
      rotation={[0, -Math.PI / 2, 0]}
    />
  );
}

function World({ currTab, windowWidth }) {
  return (
    <Canvas shadows style={{ position: "fixed", height: "100vh" }}>
      {/* <OrbitControls /> */}
      <ThisCamera currTab={currTab} windowWidth={windowWidth} />
      <ambientLight intensity={0.1} />
      <pointLight castShadow position={[0, 2, 0]} />
      <SkySphere currTab={currTab} />
      <Plane currTab={currTab} />
      <Plant />
      <Cpu />
      <Piano />
    </Canvas>
  );
}

export default World;
