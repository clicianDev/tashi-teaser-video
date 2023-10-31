import React from "react";
import { PointLight, SpotLightHelper } from "three";

const CustomLights = () => {
  const spotlightRef = React.useRef(); // Spotlight reference
  const spotlightHelperRef = React.useRef(); // Spotlight helper reference
  const pointlightRef = React.useRef();
  const pointLightHelperRef = React.useRef();

  return (
    <>
      <spotLight
        color={`cyan`}
        ref={spotlightRef}
        position={[5, 5, 5]}
        angle={Math.PI / 5}
        intensity={150}
        castShadow
      />

      {/* {spotlightRef.current && (
        <primitive
          object={new SpotLightHelper(spotlightRef.current)}
          ref={spotlightHelperRef}
        />
      )} */}

      <hemisphereLight intensity={3} groundColor="violet" color={"#C500FF"} />
    </>
  );
};

export default CustomLights;
