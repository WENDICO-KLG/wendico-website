"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type BasePair = {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  length: number;
};

type StrandEnd = {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
};

const HELIX_HEIGHT = 70;
const HELIX_RADIUS = 1.22;
const HELIX_TURNS = 18;

function helixPoint(progress: number, phase: number) {
  const angle = progress * Math.PI * 2 * HELIX_TURNS + phase;
  return new THREE.Vector3(
    Math.cos(angle) * HELIX_RADIUS,
    (progress - 0.5) * HELIX_HEIGHT,
    Math.sin(angle) * HELIX_RADIUS,
  );
}

function DNAObject() {
  const groupRef = useRef<THREE.Group>(null);
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const { curves, basePairs, strandEnds } = useMemo(() => {
    const pointsA = Array.from({ length: 361 }, (_, index) => helixPoint(index / 360, 0));
    const pointsB = Array.from({ length: 361 }, (_, index) => helixPoint(index / 360, Math.PI));
    const pairData: BasePair[] = Array.from({ length: 109 }, (_, index) => {
      const progress = 0.025 + (index + 0.5) * (0.95 / 109);
      const start = helixPoint(progress, 0);
      const end = helixPoint(progress, Math.PI);
      const direction = end.clone().sub(start);
      const midpoint = start.clone().add(end).multiplyScalar(0.5);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.clone().normalize(),
      );
      return { position: midpoint, quaternion, length: direction.length() };
    });
    const endData: StrandEnd[] = [0, Math.PI].map((phase) => {
      const end = helixPoint(1, phase);
      const previous = helixPoint(0.992, phase);
      return {
        position: end.clone().add(end.clone().sub(previous).normalize().multiplyScalar(0.025)),
        quaternion: new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          end.clone().sub(previous).normalize(),
        ),
      };
    });
    return {
      curves: [new THREE.CatmullRomCurve3(pointsA), new THREE.CatmullRomCurve3(pointsB)],
      basePairs: pairData,
      strandEnds: endData,
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || reducedMotion) return;
    const section = state.gl.domElement.closest(".home-projects-section");
    const sectionTop = section instanceof HTMLElement ? section.offsetTop : 0;
    const targetRotation = -(window.scrollY - sectionTop) / 430;
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotation,
      7,
      delta,
    );
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.32) * 0.07;
  });

  return (
    <group ref={groupRef} rotation={[0.05, 0, -0.035]}>
      {curves.map((curve, index) => (
        <mesh key={index}>
          <tubeGeometry args={[curve, 480, 0.105, 12, false]} />
          <meshPhysicalMaterial
            color={index === 0 ? "#151917" : "#737b77"}
            metalness={1}
            roughness={0.16}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={1.8}
          />
        </mesh>
      ))}

      {basePairs.map((pair, index) => (
        <mesh
          key={index}
          position={pair.position}
          quaternion={pair.quaternion}
          scale={[1, pair.length, 1]}
        >
          <cylinderGeometry args={[0.046, 0.046, 1, 10]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#abb4af" : "#303a35"}
            metalness={1}
            roughness={0.2}
          />
        </mesh>
      ))}

      {strandEnds.map((end, index) => (
        <mesh key={`end-${index}`} position={end.position} quaternion={end.quaternion}>
          <sphereGeometry args={[0.115, 16, 12]} />
          <meshPhysicalMaterial
            color={index === 0 ? "#151917" : "#737b77"}
            metalness={1}
            roughness={0.12}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={1.9}
          />
        </mesh>
      ))}

    </group>
  );
}

export default function DNAHelix() {
  return (
    <div className="dna-helix-canvas" aria-hidden="true">
      <Canvas
        dpr={1}
        camera={{ position: [0, 0, 105], fov: 38, near: 0.1, far: 2000 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 7, 10]} intensity={5} color="#ffffff" />
        <directionalLight position={[-5, 1, 7]} intensity={3} color="#b9fff0" />
        <pointLight position={[0, -4, 8]} intensity={70} distance={24} color="#ffdcb8" />
        <DNAObject />
      </Canvas>
    </div>
  );
}