"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

// 模型元件
function CityModel() {
  const obj = useLoader(OBJLoader, "/models/desert-city.obj");
  return <primitive object={obj} scale={0.1} />;
}

// 地標與標籤
function LocationMarker({ position, label, onClick }) {
  return (
    <group position={position}>
      <mesh onClick={() => onClick(label, position)}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <Text
        position={[0, 0.6, 0]}
        fontSize={0.3}
        color="black"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#ffffff"
      >
        {label}
      </Text>
    </group>
  );
}

// 攝影機飛行控制
function CameraController({ target, onArrived }) {
  const arrived = useRef(false);
  const vec = new THREE.Vector3();

  useFrame(({ camera }) => {
    if (target && !arrived.current) {
      vec.lerpVectors(camera.position, target, 0.05);
      camera.position.copy(vec);
      camera.lookAt(0, 0, 0);
      if (camera.position.distanceTo(target) < 0.1) {
        arrived.current = true;
        onArrived?.();
      }
    }
  });

  useEffect(() => {
    arrived.current = false;
  }, [target]);

  return null;
}

// 🔷 主元件
export default function CityScene() {
  const [camTarget, setCamTarget] = useState(null);
  const [activeInfo, setActiveInfo] = useState(null);

  const locations = [
    {
      label: "中山醫學院",
      position: [2, 0.5, 2],
      description:
        "中山醫學大學，簡稱中山醫大，是位於臺中市南區的一所醫學大學，設有醫學、口腔醫學、醫學科技及健康管理等四個學院。",
    },
    {
      label: "宜園大院",
      position: [-4, 0.5, 3],
      description: "城市北端的住宅區，環境清幽綠意盎然。",
    },
    {
      label: "麥當勞",
      position: [-3, 0.5, -3],
      description: "區域內的速食店，提供各式漢堡、薯條與飲品。",
    },
  ];

  const handleMarkerClick = (label, position) => {
    setCamTarget(new THREE.Vector3(...position));
    const location = locations.find((loc) => loc.label === label);
    setActiveInfo(location);
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {activeInfo && (
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "rgba(255, 255, 255, 0.95)",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            maxWidth: "400px",
            fontFamily: "sans-serif",
            lineHeight: 1.6,
            zIndex: 10,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: "bold",
              color: "#222",
            }}
          >
            {activeInfo.label}
          </h2>
          <p style={{ fontSize: "15px", marginTop: "12px", color: "#333" }}>
            {activeInfo.description}
          </p>
        </div>
      )}

      <Canvas camera={{ position: [0, 10, 30], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 10]} intensity={1} />
        <Suspense fallback={null}>
          <CityModel />
          {locations.map((loc, i) => (
            <LocationMarker
              key={i}
              position={loc.position}
              label={loc.label}
              onClick={handleMarkerClick}
            />
          ))}
        </Suspense>
        <CameraController target={camTarget} onArrived={() => {}} />
        <OrbitControls enableDamping />
      </Canvas>
    </div>
  );
}
