import React, { useRef } from "react"
import { useLoader, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import * as THREE from "three"

import EarthDayMap from "../../images/earth/8k_earth_daymap.jpg"
import EarthNormalMap from "../../images/earth/8k_earth_normal_map.jpg"
import EarthSpecularMap from "../../images/earth/8k_earth_specular_map.jpg"
import EarthCloudsMap from "../../images/earth/8k_earth_clouds.jpg"
import { TextureLoader } from "three"

const Earth = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])

  // const earthRef = useRef()
  // const cloudsRef = useRef()

  // useFrame(({ clock }) => {
  //   const elapsedTime = clock.getElapsedTime()
    
  //   earthRef.current.rotation.y = elapsedTime / 6
  //   cloudsRef.current.rotation.y = elapsedTime / 6
  // })

  return (
    <>
      <pointLight color="#F6F3EA" position={[50, 50, 50]} intensity={2} />
      {/* <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.505, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh> */}
      <mesh position={[50, 50, 50]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="red" />
      </mesh>
    </>
  )
}

export default Earth