import { Environment } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import * as T from 'three';
import Custom from './Custom';
import store from './store';
const RootScene = () => {
  useThree((t) => {
    t.scene.background = new T.Color('pink');
  });
  useFrame(({ camera }) => {
    camObj.position.y = T.MathUtils.damp(
      camObj.position.y,
      store.targetObj.position.y,
      4,
      0.1
    );
    camera.lookAt(camObj.position);
  });
  const camObj = useMemo(() => new T.Object3D(), []);
  return (
    <scene>
      <Environment preset="city" />
      <primitive object={camObj} />
      <Custom position={new T.Vector3(0, 0, 0)} />
      <Custom position={new T.Vector3(0, 1.5, 0)} />
      <Custom position={new T.Vector3(0, -1.5, 0)} />
      <axesHelper />
    </scene>
  );
};

export default RootScene;
