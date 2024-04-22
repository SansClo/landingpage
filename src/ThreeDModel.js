import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function RotatingBox() {
    const meshRef = useRef();
    useFrame((state, delta) => (meshRef.current.rotation.x += 0.01));

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    );
}

function ThreeDModel() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <RotatingBox />
        </Canvas>
    );
}

export default ThreeDModel;
