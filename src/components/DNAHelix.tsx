"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type BasePair = {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  length: number;
  start: THREE.Vector3;
  end: THREE.Vector3;
};

type StrandEnd = {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
};

const HELIX_HEIGHT = 70;
const HELIX_RADIUS = 1.5;
const HELIX_TURNS = 18;
const BEAD_COUNT = 361;
const PARTICLE_COUNT = 3200;

function seededNoise(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function helixPoint(progress: number, phase: number) {
  const angle = progress * Math.PI * 2 * HELIX_TURNS + phase;
  return new THREE.Vector3(
    Math.cos(angle) * HELIX_RADIUS,
    (progress - 0.5) * HELIX_HEIGHT,
    Math.sin(angle) * HELIX_RADIUS,
  );
}

function MolecularBeads({
  positions,
  radius,
  palette,
  particleField = false,
}: {
  positions: THREE.Vector3[];
  radius: number;
  palette: string[];
  particleField?: boolean;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const color = useMemo(() => new THREE.Color(), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    positions.forEach((position, index) => {
      const size = radius * (particleField ? 0.22 + seededNoise(index + 11) * 1.05 : 0.72 + ((index * 37) % 11) / 25);
      dummy.position.copy(position);
      dummy.scale.setScalar(size);
      dummy.updateMatrix();
      mesh.setMatrixAt(index, dummy.matrix);
      color.set(palette[index % palette.length]);
      mesh.setColorAt(index, color);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [color, dummy, palette, particleField, positions, radius]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, positions.length]}>
      <sphereGeometry args={particleField ? [1, 6, 5] : [1, 16, 12]} />
      {particleField ? (
        <meshBasicMaterial transparent opacity={0.56} depthWrite={false} toneMapped={false} />
      ) : (
        <meshPhysicalMaterial metalness={0.3} roughness={0.24} clearcoat={1} clearcoatRoughness={0.08} emissive="#176b4b" emissiveIntensity={0.18} />
      )}
    </instancedMesh>
  );
}

function DNAObject() {
  const groupRef = useRef<THREE.Group>(null);
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const { curves, basePairs, strandEnds, backboneBeads, particles, rungEnds } = useMemo(() => {
    const pointsA = Array.from({ length: 361 }, (_, index) => helixPoint(index / 360, 0));
    const pointsB = Array.from({ length: 361 }, (_, index) => helixPoint(index / 360, Math.PI));
    const pairData: BasePair[] = Array.from({ length: 144 }, (_, index) => {
      const progress = 0.025 + (index + 0.5) * (0.95 / 144);
      const start = helixPoint(progress, 0);
      const end = helixPoint(progress, Math.PI);
      const direction = end.clone().sub(start);
      const midpoint = start.clone().add(end).multiplyScalar(0.5);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.clone().normalize(),
      );
      return { position: midpoint, quaternion, length: direction.length(), start, end };
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
      backboneBeads: [
        ...Array.from({ length: BEAD_COUNT }, (_, index) => helixPoint(index / (BEAD_COUNT - 1), 0)),
        ...Array.from({ length: BEAD_COUNT }, (_, index) => helixPoint(index / (BEAD_COUNT - 1), Math.PI)),
      ],
      particles: Array.from({ length: PARTICLE_COUNT }, (_, index) => {
        const progress = index / (PARTICLE_COUNT - 1);
        const angle = progress * Math.PI * 2 * HELIX_TURNS + (seededNoise(index + 1) - 0.5) * Math.PI * 2;
        const spread = 1 + seededNoise(index + 2) * 3.7;
        return new THREE.Vector3(
          Math.cos(angle) * (HELIX_RADIUS + spread) - spread * 0.18,
          (progress - 0.5) * HELIX_HEIGHT + (seededNoise(index + 3) - 0.5) * 1.5,
          Math.sin(angle) * (HELIX_RADIUS + spread),
        );
      }),
      rungEnds: pairData.flatMap((pair) => [pair.start, pair.end]),
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
          <tubeGeometry args={[curve, 480, 0.035, 10, false]} />
          <meshPhysicalMaterial
            color={index === 0 ? "#0b3023" : "#176b4b"}
            metalness={0.4}
            roughness={0.28}
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
          <cylinderGeometry args={[0.028, 0.028, 1, 8]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#d8ff71" : "#38a875"}
            metalness={0.35}
            roughness={0.3}
          />
        </mesh>
      ))}

      <MolecularBeads positions={rungEnds} radius={0.16} palette={["#d8ff71", "#38a875", "#f1ffd0", "#176b4b"]} />
      <MolecularBeads positions={backboneBeads} radius={0.135} palette={["#0b3023", "#176b4b", "#38a875", "#d8ff71"]} />
      <MolecularBeads positions={particles} radius={0.035} palette={["#176b4b", "#38a875", "#d8ff71", "#b4dd65"]} particleField />

      {strandEnds.map((end, index) => (
        <mesh key={`end-${index}`} position={end.position} quaternion={end.quaternion}>
          <sphereGeometry args={[0.2, 24, 18]} />
          <meshPhysicalMaterial
            color={index === 0 ? "#176b4b" : "#d8ff71"}
            metalness={0.35}
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
        <directionalLight position={[-5, 1, 7]} intensity={3.5} color="#d8ffb0" />
        <pointLight position={[0, -4, 8]} intensity={55} distance={30} color="#d8ff71" />
        <pointLight position={[3, 5, -4]} intensity={32} distance={26} color="#38a875" />
        <DNAObject />
      </Canvas>
    </div>
  );
}