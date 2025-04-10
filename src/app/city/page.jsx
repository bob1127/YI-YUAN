"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

// 載入 .obj 模型
function CityModel() {
  const obj = useLoader(OBJLoader, "/models/desert-city.obj");
  return <primitive object={obj} scale={0.1} />;
}

// 地標圖示 + 名稱
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

// 攝影機控制器（一次性移動）
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

export default function CityPage() {
  const [camTarget, setCamTarget] = useState(null);
  const [activeInfo, setActiveInfo] = useState(null);

  // 地標資料
  const locations = [
    {
      label: "中山醫學院",
      position: [2, 0.5, 2],
      description:
        "中山醫學大學，簡稱中山醫大，是位於臺中市南區的一所醫學大學，設有醫學、口腔醫學、醫學科技及健康管理等四個學院。校本部鄰近捷運大慶站與臺鐵大慶車站。",
    },
    {
      label: "宜園大院",
      position: [-4, 0.5, 3],
      description:
        "位於城市北端的社區型住宅，環境清幽、綠地豐富，適合家庭居住。",
    },
    {
      label: "麥當勞",
      position: [-3, 0.5, -3],
      description:
        "本區的連鎖速食餐廳，供應漢堡、薯條及冷飲，是年輕人聚會的熱門地點。",
    },
  ];

  const handleMarkerClick = (label, position) => {
    setCamTarget(new THREE.Vector3(...position));
    const location = locations.find((loc) => loc.label === label);
    setActiveInfo(location);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Info Box */}
      {activeInfo && (
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 40,
            background: "rgba(255, 255, 255, 0.95)",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            maxWidth: "1000px",
            height: "90vh",
            fontFamily: "sans-serif",
            lineHeight: 1.6,
            zIndex: 9999999999999999,
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

      {/* Three.js Canvas */}
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
