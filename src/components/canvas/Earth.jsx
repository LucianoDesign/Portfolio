import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, ContactShadows } from '@react-three/drei';
import CanvasLoader from '../Loader'


const Earth = (props) => {
  const earth = useGLTF('./planet2/scene.gltf')
  const { nodes, materials } = earth;
  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI]} {...props} dispose={null}>
      <mesh geometry={nodes['URF-Height_Lampd_Ice_0'].geometry} material={materials.Lampd_Ice} />
      <mesh geometry={nodes['URF-Height_watr_0'].geometry} material={materials.watr} material-roughness={0} />
      <mesh geometry={nodes['URF-Height_Lampd_0'].geometry} material={materials.Lampd} material-color="lightgreen">
       
        
      </mesh>
    </group>
  )
}

const EarthCanvas = () => {
  
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: false}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI /2}
        minPolarAngle={Math.PI /2}
        />
        <ambientLight intensity={0.5} />
        <Earth position={[0, 0.25, 0]}/>
        <ContactShadows frames={1} scale={5} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" />
        
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;