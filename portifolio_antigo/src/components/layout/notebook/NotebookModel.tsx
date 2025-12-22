import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function NotebookModel() {
  const { scene } = useGLTF('/models/notebook.gltf');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = document.createElement('video');
    vid.src = '/videos/demo.mp4';  // caminho do vídeo
    vid.loop = true;
    vid.muted = true;
    vid.autoplay = true;
    vid.playsInline = true;
    vid.preload = 'auto';
    vid.play().catch(() => console.warn('Autoplay bloqueado.'));

    videoRef.current = vid;

    const videoTexture = new THREE.VideoTexture(vid);
    videoTexture.encoding = THREE.sRGBEncoding;

    // procurar mesh da tela
    let screenMesh: any = null;
    scene.traverse((obj) => {
      if (obj.isMesh && obj.name.toLowerCase().includes('screen')) {
        screenMesh = obj;
      }
    });

    if (screenMesh) {
      screenMesh.material = new THREE.MeshStandardMaterial({
        map: videoTexture,
        roughness: 0.6,
        metalness: 0.1,
      });
    } else {
      console.warn('Não encontrou mesh para a tela!');
    }
  }, [scene]);

  return <primitive object={scene} scale={1.5} />;
}
