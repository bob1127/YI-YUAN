"use client";

import dynamic from "next/dynamic";
import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// 模型元件
function CityModel({ onModelLoaded }) {
  const glb = useGLTF("/models/City11.glb");
  const ref = useRef();

  useEffect(() => {
    if (glb.scene && ref.current && onModelLoaded) {
      onModelLoaded(ref.current);
    }
  }, [glb.scene]);

  return (
    <primitive ref={ref} object={glb.scene} scale={0.2} position={[0, -1, 0]} />
  );
}

// 攝影機控制器
function CameraController({ target }) {
  const controls = useRef();

  useEffect(() => {
    if (target && controls.current) {
      controls.current.target.set(...target.toArray());
    }
  }, [target]);

  return (
    <OrbitControls
      ref={controls}
      makeDefault
      enableDamping
      enableZoom
      enablePan
      enableRotate
      zoomSpeed={0.8}
      panSpeed={0.5}
      rotateSpeed={0.5}
      minDistance={0.01}
      maxDistance={200}
      maxPolarAngle={Math.PI / 2}
    />
  );
}

// 攝影機滑動過去地標
function CameraFlyToTarget({ target }) {
  const { camera } = useThree();
  const vec = useRef(new THREE.Vector3());
  const arrived = useRef(true);

  useEffect(() => {
    if (target) {
      arrived.current = false;
    }
  }, [target]);

  useFrame(() => {
    if (!target || arrived.current) return;

    vec.current.lerpVectors(camera.position, target, 0.05);
    camera.position.copy(vec.current);
    camera.lookAt(0, 0, 0);

    if (camera.position.distanceTo(target) < 0.2) {
      arrived.current = true;
    }
  });

  return null;
}

// Canvas 內容元件
function SceneContent({ isNight, camTarget, setCamTarget }) {
  const { camera } = useThree();

  const handleModelLoaded = (model) => {
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());

    camera.position.set(center.x, center.y + size * 0.4, center.z + size * 0.6);
    camera.lookAt(center);
    setCamTarget(center);
  };

  // ✅ 地標資料（小一點 + 貼近建築 + 顯示全名）
  const landmarks = [
    {
      label: "馬來西亞觀景平台",
      position: [1, 0.1, 0],
    },
    {
      label: "主塔 TOWER",
      position: [-1.5, 0.1, 1.5],
    },
    {
      label: "文化館 CULTURAL HALL",
      position: [0.5, 0.1, -1.2],
    },
  ];

  return (
    <>
      <ambientLight intensity={isNight ? 0.1 : 0.6} />
      {isNight ? (
        <directionalLight
          position={[10, 20, 10]}
          intensity={0.3}
          color="#88aaff"
        />
      ) : (
        <directionalLight position={[10, 20, 10]} intensity={1} />
      )}

      <Suspense fallback={null}>
        <CityModel onModelLoaded={handleModelLoaded} />

        {/* ✅ 渲染地標 */}
        {landmarks.map((item, i) => (
          <group key={i} position={item.position}>
            <mesh
              onClick={() => setCamTarget(new THREE.Vector3(...item.position))}
              scale={0.4}
            >
              <coneGeometry args={[0.2, 0.4, 2]} />
              <meshStandardMaterial color="orange" />
            </mesh>
            <Text
              position={[0, 0.6, 0]}
              fontSize={0.25}
              color="black"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.015}
              outlineColor="#ffffff"
              maxWidth={4}
              lineHeight={1.2}
            >
              {item.label}
            </Text>
          </group>
        ))}
      </Suspense>

      <CameraFlyToTarget target={camTarget} />
      <CameraController target={camTarget} />
    </>
  );
}

// 主組件
function CityScene() {
  const [camTarget, setCamTarget] = useState(null);
  const [isNight, setIsNight] = useState(false);

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {/* 切換白天/夜晚 */}
      <button
        onClick={() => setIsNight(!isNight)}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 20,
          padding: "10px 16px",
          background: "#222",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        切換到{isNight ? "白天" : "晚上"}
      </button>

      <Canvas
        camera={{ position: [0, 10, 30], fov: 35 }}
        style={{ background: isNight ? "#0a0f2c" : "#87ceeb" }}
      >
        <SceneContent
          isNight={isNight}
          camTarget={camTarget}
          setCamTarget={setCamTarget}
        />
      </Canvas>
    </div>
  );
}

export default dynamic(() => Promise.resolve(CityScene), { ssr: false });
