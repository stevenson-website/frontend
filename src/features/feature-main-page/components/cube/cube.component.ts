import { Component, Input, OnInit } from '@angular/core';

import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css'],
})
export class CubeComponent implements OnInit {
  @Input() cubeSize: 'SM' | 'MD' | 'LG' = 'MD';
  @Input() backgroundColor: number = 0x626b7b;

  cubeEdgeLength: number = 7;
  canvasEdgeLength: number;
  cameraProximity: number;

  constructor() {
    switch (this.cubeSize) {
      case 'SM':
        this.canvasEdgeLength = 250;
        this.cameraProximity = 55;
        break;
      case 'MD':
        this.canvasEdgeLength = 300;
        this.cameraProximity = 50;
        break;
      case 'LG':
        this.canvasEdgeLength = 350;
        this.cameraProximity = 45;
        break;
      default:
        this.canvasEdgeLength = 300;
        this.cameraProximity = 50;
        break;
    }
  }

  ngOnInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {
    const scene = new THREE.Scene();

    // Cube
    //   Geometry
    const geometry = new THREE.BoxGeometry(
      this.cubeEdgeLength,
      this.cubeEdgeLength,
      this.cubeEdgeLength
    );

    //   Material
    const textureLoader = new THREE.TextureLoader();
    const catTexture = textureLoader.load('assets/pictures/cat.jpg');
    const catPicMaterial = new THREE.MeshBasicMaterial({ map: catTexture });
    const personTexture = textureLoader.load('assets/pictures/person.jpg');
    const personPicMaterial = new THREE.MeshBasicMaterial({
      map: personTexture,
    });
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xffffff }), // Right side
      new THREE.MeshBasicMaterial({ color: 0xc5a54e }), // Left side
      new THREE.MeshBasicMaterial({ color: 0xb6b2be }), // Top side
      new THREE.MeshBasicMaterial({ color: 0xffffff }), // Bottom side
      personPicMaterial,
      catPicMaterial, // Back side
    ];

    //    Mesh
    const mesh = new THREE.Mesh(geometry, materials);
    mesh.rotation.x = Math.PI / 4;
    scene.add(mesh);

    // Sizes
    const sizes = {
      width: this.canvasEdgeLength, //window.innerWidth,
      height: this.canvasEdgeLength, //window.innerHeight,
    };

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Parameters: color, intensity
    scene.add(ambientLight);
    scene.add(ambientLight);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      this.cameraProximity,
      sizes.width / sizes.height
    );
    camera.position.z = 17;
    scene.add(camera);

    // Renderer
    const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);
    renderer.setClearColor(this.backgroundColor);
    renderer.render(scene, camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Resizing and Looping all the time
    window.addEventListener('resize', () => {
      //sizes.width = window.innerWidth;
      //sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();

    // Timeline
    const timeline = gsap.timeline({ defaults: { duration: 3 } });
    timeline.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
    timeline.fromTo('.title', { opacity: 0 }, { opacity: 1 });
  }
}
