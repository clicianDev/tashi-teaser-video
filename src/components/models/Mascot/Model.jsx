import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

function Model(props) {
  const groups = useRef();
  const mascot = useGLTF("models/mascot.glb");
  const { actions, names } = useAnimations(mascot.animations, groups);
  console.log(actions);
  const [clickCount, setClickCount] = useState(0);
  const [animationName, setAnimationName] = useState("Meditate");
  const [shapekey, setShapekey] = useState("Meditate_key");
  const [shouldPlayAnimation1, setShouldPlayAnimation1] = useState(false);
  const [shouldStopAnimation, setShouldStopAnimation] = useState(false);

  useEffect(() => {
    switch (props.currentPage) {
      case 1:
        setAnimationName("Meditate");
        setShapekey("Meditate_key");
        break;
      case 2:
        setAnimationName("Discussing_anim");
        setShapekey("Discussing_key");
        break;
      case 3:
        setAnimationName("Idle");
        setShapekey("Idle_key");
        break;
    }
  }, [props.currentPage]);

  useEffect(() => {
    const animation = actions[animationName];
    const animation2 = actions[shapekey];

    console.log(animation2);
    animation2.reset().fadeIn(0.5).play();
    animation.reset().fadeIn(0.5).play();

    if (shouldStopAnimation) {
      animation.fadeOut(0.5).stop();
    }
    if (shouldPlayAnimation1) {
      setTimeout(() => {
        if (clickCount % 2 === 0) {
          setAnimationName("Meditate");
          setShapekey("Meditate_key");
          setShouldPlayAnimation1(false);
        } else {
          setAnimationName("Idle");
          setShapekey("Idle_key");
          setShouldPlayAnimation1(false);
        }
      }, animation._clip.duration * 800);
    }

    return () => {
      animation.fadeOut(0.5);
      animation2.fadeOut(0.5);
    };
  }, [animationName, shapekey, shouldPlayAnimation1, shouldStopAnimation]);

  const handleClick = (e) => {
    if (props.currentPage === 1 || props.currentPage === 3 ) {
      setAnimationName("Falling");
      setShapekey("Falling_Key");
      setClickCount(clickCount + 1);
      setShouldPlayAnimation1(true);
    }
  };

  return (
    <>
      <mesh ref={groups} castShadow receiveShadow onClick={handleClick}>
        <primitive object={mascot.scene} position={[0, 0, 0]} />
      </mesh>
    </>
  );
}
useGLTF.preload("models/mascot.glb");
export default Model;

