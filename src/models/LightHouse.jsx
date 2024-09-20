import React,{useRef} from 'react'
import { useGLTF } from '@react-three/drei'
const LightHouse = (props) => {
    const lightHouseRef=useRef();
    const lighthouse=useGLTF("/lighthouse.glb")
  return (
    <mesh ref={lightHouseRef} {...props}>
        <primitive object={lighthouse.scene} scale={0.02} />
    </mesh>
  )
}

export default LightHouse