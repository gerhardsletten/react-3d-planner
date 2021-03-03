import React from 'react'
import { Canvas, useResource } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { theme } from 'twin.macro'

const products = [
  {
    id: 'skuffseksjon',
    z: 0,
    height: 0.9,
    width: 0.6,
    depth: 0.6,
    color: theme`colors.blue.700`,
  },
  {
    id: 'skap',
    z: 0,
    height: 1.8,
    width: 0.8,
    depth: 0.6,
    color: theme`colors.blue.700`,
  },
  {
    id: 'overskap',
    z: 1.4,
    height: 0.4,
    width: 0.6,
    depth: 0.4,
    color: theme`colors.blue.700`,
  },
  {
    id: 'bakvegg',
    z: 0.9,
    height: 0.9,
    width: 0.6,
    depth: 0.001,
    color: theme`colors.blue.500`,
  },
]

const OFFSET = 0.05

function calculatePlacements(data) {
  const rowsData = data.map((row) => {
    const items = row.map((id) => products.find((prod) => prod.id === id))
    const width = Math.max(...items.map((item) => item.width + OFFSET))
    return {
      width,
      items,
    }
  })
  const totalWidth = rowsData.reduce((a, b) => a + b.width, 0)
  let prevEdge = 0
  rowsData.forEach((row) => {
    row.x = prevEdge + row.width / 2
    prevEdge = prevEdge + row.width
  })
  return {
    width: totalWidth,
    data: rowsData,
  }
}

function Planner() {
  const { width, data } = calculatePlacements([
    ['skap'],
    ['skap'],
    ['skuffseksjon', 'overskap', 'bakvegg'],
    ['skuffseksjon', 'bakvegg'],
  ])
  const groupX = -(width / 2)
  return (
    <Canvas
      tw="flex-1"
      shadowMap
      style={{ background: theme`colors.gray.700` }}
      pixelRatio={window.devicePixelRatio}
      camera={{
        position: [1, 2, 4],
      }}
    >
      <Light />
      <group position={[groupX, 0, 0]}>
        {data.map(({ x, items }, i) => (
          <group key={i} position={[x, 0, 0]}>
            {items.map((item, j) => (
              <mesh
                key={j}
                castShadow
                position={[0, item.z + item.height / 2, item.depth / 2]}
              >
                <boxBufferGeometry
                  args={[item.width, item.height, item.depth]}
                />
                <meshStandardMaterial attachArray="material" color="gray" />
                <meshStandardMaterial attachArray="material" color="gray" />
                <meshStandardMaterial attachArray="material" color="gray" />
                <meshStandardMaterial attachArray="material" color="gray" />
                <meshStandardMaterial
                  attachArray="material"
                  color={item.color}
                />
                <meshStandardMaterial attachArray="material" color="gray" />
              </mesh>
            ))}
          </group>
        ))}
      </group>
      <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[width + 1, width + 1]} />
        <meshPhongMaterial attach="material" color={theme`colors.gray.600`} />
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
        position={[-2, 3, 2]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
      <directionalLight
        intensity={0.6}
        position={[2, 3, 2]}
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
