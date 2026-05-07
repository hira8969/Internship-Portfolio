import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';

function Field() {
  const ref = useRef();
  const positions = useMemo(() => {
    const values = new Float32Array(900);
    for (let i = 0; i < values.length; i += 1) values[i] = (Math.random() - 0.5) * 12;
    return values;
  }, []);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.025;
    ref.current.rotation.y += delta * 0.035;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#8af7ff" size={0.018} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export default function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 65 }}>
        <Field />
      </Canvas>
    </div>
  );
}
