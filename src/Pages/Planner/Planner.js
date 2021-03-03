import React from 'react'
import { Canvas, useResource } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { theme } from 'twin.macro'

function Planner() {
  return (
    <Canvas
      tw="flex-1"
      shadowMap
      style={{ background: theme`colors.gray.700` }}
      pixelRatio={window.devicePixelRatio}
      camera={{
        position: [2, 4, 4],
      }}
    >
      <Light />
      <mesh castShadow position={[0.5, 2, 1]}>
        <dodecahedronBufferGeometry attach="geometry" args={[1, 0]} />
        <meshStandardMaterial attach="material" />
      </mesh>
      <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[5, 5]} />
        <meshPhongMaterial attach="material" color={theme`colors.blue.500`} />
      </mesh>
      <OrbitControls />
      <gridHelper />
    </Canvas>
  )
}

const Light = () => {
  const lightRef = useResource()
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        ref={lightRef}
        intensity={0.6}
        position={[0, 3, 2]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
      {lightRef.current && (
        <directionalLightHelper args={[lightRef.current, 1]} />
      )}
    </>
  )
}

export default Planner
