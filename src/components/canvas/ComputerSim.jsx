import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  ContactShadows,
  Html,
} from "@react-three/drei";
import { alice } from "../../assets";
import CanvasLoader from "../Loader";

const Computer = (props) => {
  const group = useRef();

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
            className="content"
            rotation-x={0}
            position={[0, 12.85, -5.3]}
            transform
            occlude
          >
            <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
              <div className="w-full bg-black -z-40 flex items-center justify-center">
                <img className="w-full h-max" src={alice} />
              </div>
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

const ComputersSim = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [htmlVisible, setHtmlVisible] = useState(false);
  const canvasStyle = {
    width: "100%",
    transform: `translateX(300px) translateY(200px)`,
    
  };
  const canvasStyle2 = {
    
    transform: `translateX(300px) translateY(250px)`,
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setHtmlVisible(true);
    }, 1000);
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 550px)");

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
      style={isMobile ? canvasStyle2 : canvasStyle}
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={
        isMobile
          ? { position: [-5, 5, 30], fov: 40 }
          : { position: [2, 5, 30], fov: 35 }
      }
      gl={{ preserveDrawingBuffer: true }}
      key={Date.now()}
    >
      <Suspense fallback={<CanvasLoader />}>
        <group rotation={[0, -0.3, 0]} position={[0, 1, 0]}>
          <Computer
            scale={isMobile ? [0, 0, 0] : [0.6, 0.6, 0.6]}
            htmlVisible={htmlVisible}
          />
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

export default ComputersSim;
