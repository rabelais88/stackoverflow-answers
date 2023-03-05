import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import RootScene from './RootScene';

function App() {
  return (
    <div className="App">
      <Canvas>
        <RootScene />
      </Canvas>
    </div>
  );
}

export default App;
