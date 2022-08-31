import * as T from 'three';
import * as d3 from 'd3';

// https://observablehq.com/@rabelais/circle-inside-grids

// grid space of 20x20
const gridWidth = 20;
const gridHeight = 20;
const radius = 9.5;
const randomGen = d3.randomNormal();
const data = d3.range(gridWidth * gridHeight).map((i) => ({
  gridX: Math.floor(i / gridWidth),
  gridY: i % gridHeight,
  value: randomGen(),
}));
const midPoint = { x: gridWidth / 2, y: gridHeight / 2 };

const chartSize = { x: 3, y: 3, z: 2 };
const scaleBandX = d3
  .scaleBand()
  .domain(d3.range(gridWidth).map((n) => n.toString()))
  .range([0, chartSize.x])
  .paddingInner(0.2);
const scaleBandY = d3
  .scaleBand()
  .domain(d3.range(gridHeight).map((n) => n.toString()))
  .range([0, chartSize.y])
  .paddingInner(0.2);
const values = data.map((d) => d.value);
const extent = d3.extent(values) as number[];
const scaleZ = d3.scaleLinear().domain(extent);

const gridData = data
  // filter out boxes outside circle radius
  .filter(
    (d) =>
      (midPoint.x - d.gridX) ** 2 + (midPoint.y - d.gridY) ** 2 - radius ** 2 <
      0
  )
  // add 3d dimension info
  .map((d) => ({
    ...d,
    x: scaleBandX(d.gridX.toString()) ?? 0,
    y: scaleBandY(d.gridY.toString()) ?? 0,
    z: scaleZ.range([0, chartSize.z / 2])(d.value),
    /** length */
    l: scaleZ.range([0, chartSize.z])(d.value),
    w: scaleBandX.bandwidth(),
    h: scaleBandY.bandwidth(),
  }));

class RootScene {
  scene = new T.Scene();
  // top-level component goes here
  camera;
  group;
  bars;
  constructor(args: { width: number; height: number }) {
    this.camera = new T.PerspectiveCamera(
      75,
      args.width / args.height,
      1,
      1000
    );
    this.camera.position.z = 3;
    this.scene.add(this.camera);
    this.scene.add(new T.AmbientLight('white', 0.3));
    const pointLight = new T.PointLight('white');
    pointLight.position.z = 5;
    this.scene.add(pointLight);
    this.scene.add(new T.AxesHelper());
    this.group = new T.Group();
    this.scene.add(this.group);
    this.bars = gridData.map(this.makeBar);
    this.bars.forEach((mesh) => this.group.add(mesh));
    this.center();
  }
  center() {
    const box = new T.Box3();
    const size = new T.Vector3();
    box.setFromObject(this.group);
    box.getSize(size);
    this.group.position.x = -size.x / 2;
    this.group.position.z = -size.y / 2;
  }
  makeBar(d: typeof gridData[0]) {
    const geo = new T.BoxGeometry(d.w, d.l, d.h, 32, 32);
    const mat = new T.MeshPhysicalMaterial({ color: 'red' });
    const mesh = new T.Mesh(geo, mat);
    mesh.position.x = d.x;
    mesh.position.z = d.y;
    mesh.position.y = d.z;
    return mesh;
  }
}

export default RootScene;
