import {React, useRef, useEffect} from 'react';
import { useGLTF, useAnimations } from "@react-three/drei";
function Room() {
  const groups = useRef();
    const room = useGLTF("models/room-2.glb");
//     const { actions, names } = useAnimations(room.animations, groups);

// useEffect(() => {
//   actions[names[0]].reset().fadeIn(0.5).play();
// }, [actions])


    return ( 
        <>
        <mesh ref={groups}  castShadow receiveShadow frustumCulled>
          <primitive object={room.scene} position={[0, 0, 0]}  />
        </mesh>
      </>
     );
}
useGLTF.preload("models/room-2.glb");
export default Room;