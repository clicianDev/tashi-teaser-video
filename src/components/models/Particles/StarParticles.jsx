import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const StarParticles = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(2500), { radius: 10.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 70;
    ref.current.rotation.y -= delta / 80;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[0,2, -5]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


export default StarParticles;