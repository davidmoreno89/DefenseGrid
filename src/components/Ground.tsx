export function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
      <planeGeometry args={[8, 8]} />
      <meshStandardMaterial color="#26313d" />
    </mesh>
  );
}
