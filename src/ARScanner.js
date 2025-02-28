import React, { useEffect } from "react";

const ARScanner = () => {
  // useEffect(() => {
  //   // Dynamically load A-Frame and MindAR scripts
  //   const aframeScript = document.createElement("script");
  //   aframeScript.src = "https://aframe.io/releases/1.2.0/aframe.min.js";
  //   aframeScript.async = true;
  //   document.head.appendChild(aframeScript);

  //   const mindarScript = document.createElement("script");
  //   mindarScript.src =
  //     "https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js";
  //   mindarScript.async = true;
  //   document.head.appendChild(mindarScript);

  //   return () => {
  //     document.head.removeChild(aframeScript);
  //     document.head.removeChild(mindarScript);
  //   };
  // }, []);

  return (
    <div>
      <a-scene
        mindar-image="imageTargetSrc: targets.mind;"
        embedded
        vr-mode-ui="enabled: false"
      >
        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        {/* Marker target for AR Video */}
        <a-entity mindar-image-target="targetIndex: 0">
          <a-video
            src="sample.mp4"
            width="1"
            height="0.5"
            position="0 0 0"
            autoplay
            loop
          ></a-video>
        </a-entity>
      </a-scene>
    </div>
  );
};

export default ARScanner;
