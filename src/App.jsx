
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Experience from './components/experience'
import { ScrollControls, Scroll, Html } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import { editable as e, SheetProvider } from "@theatre/r3f";


function App() {
  const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

  return (
    
      <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
     <color attach="background" args={["#0D0D26"]} />
     
    </Canvas>
    
  )
}

export default App
