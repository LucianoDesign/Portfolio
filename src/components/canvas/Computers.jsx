import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  ContactShadows,
  Html,
} from "@react-three/drei";
import Screen from "../Screen";
import CanvasLoader from "../Loader";

const Computer = (props) => {
  const group = useRef()
  
  const { nodes, materials } = useGLTF("./mac/Laptop.glb");

  

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
      >
        {props.htmlVisible && (
    <Html
      className="content -z-40"
      rotation-x={0}
      position={[0, 12.85, -5.30]}
      transform
      occlude
    >
      <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
        <Screen/>
      </div>
    </Html>
  )}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials.Keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.grey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_1.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.grey}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [htmlVisible, setHtmlVisible] = useState(false);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setHtmlVisible(true);
    }, 1000);
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 6, 20], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
      key={Date.now()}
    >
      <Suspense fallback={<CanvasLoader />}>
        <group rotation={[0, -0.6, 0]} position={isMobile ? [0.5,-1,0]:[4.5, -2, 0]}>
          <Computer scale={isMobile ? [0.40, 0.40, 0.40] : [0.60, 0.60, 0.60]} htmlVisible={htmlVisible} />
        </group>
      </Suspense>
      <directionalLight
        position={[10, 10, 10]}
        color={"#fff"}
        intensity={1.3}
      />
      <ambientLight intensity={0.5} color={"#fff"} />

      <ContactShadows position={[0, -6, 0]} scale={25} blur={2} far={6} />
      <OrbitControls
        target={[0, 5, 1]}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}  
        maxAzimuthAngle={Math.PI / 4} 
      />
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
