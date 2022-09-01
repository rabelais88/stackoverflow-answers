import { ElementRef } from '@angular/core';
import CameraControls from 'camera-controls';
import * as T from 'three';
import * as d3 from 'd3';
import RootScene from './RootScene';

CameraControls.install({ THREE: T });

class ChartRenderer {
  renderer;
  width;
  height;
  running = true;
  rootScene;
  cameraControls;
  clock = new T.Clock();
  constructor(args: {
    canvas: ElementRef<HTMLCanvasElement>;
    width: number;
    height: number;
  }) {
    this.width = args.width;
    this.height = args.height;
    this.rootScene = new RootScene({ width: this.width, height: this.height });
    this.renderer = new T.WebGLRenderer({ canvas: args.canvas.nativeElement });
    this.renderer.setSize(this.width, this.height);
    // set custom camera control for orbiting
    this.cameraControls = new CameraControls(
      this.rootScene.camera,
      this.renderer.domElement
    );
    this.cameraControls.setPosition(0, 3, 3);
    this.tick();
  }
  get delta() {
    return this.clock.getDelta();
  }
  tick() {
    if (!this.running) return;
    this.renderer.render(this.rootScene.scene, this.rootScene.camera);
    this.cameraControls.update(this.delta);
    requestAnimationFrame(this.tick.bind(this));
  }
}

export default ChartRenderer;
