"use client";
import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function NotebookModel() {
  const { scene } = useGLTF('/models/notebook.gltf');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Evita criar múltiplos elementos de vídeo se o componente remontar
    const vid = document.createElement('video');
    vid.src = '/videos/demo.mp4';
    vid.loop = true;
    vid.muted = true;
    vid.autoplay = true;
    vid.playsInline = true;
    vid.preload = 'auto';
    
    // Tenta reproduzir
    vid.play().catch((e) => console.warn('Autoplay bloqueado:', e));
    videoRef.current = vid;

    const videoTexture = new THREE.VideoTexture(vid);
    videoTexture.colorSpace = THREE.SRGBColorSpace; // Atualização para versões novas do ThreeJS

    let screenMesh: THREE.Mesh | undefined;
    
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh && obj.name.toLowerCase().includes('screen')) {
        screenMesh = obj as THREE.Mesh;
      }
    });

    if (screenMesh) {
      screenMesh.material = new THREE.MeshStandardMaterial({
        map: videoTexture,
        roughness: 0.6,
        metalness: 0.1,
      });
    }
  }, [scene]);

  return <primitive object={scene} scale={1.5} />;
}