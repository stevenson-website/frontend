import { Component, Input, OnInit } from '@angular/core';

import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DarkModeService } from 'src/app/services/darkmode.service';
import { BehaviorSubject, skip, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css'],
})
export class CubeComponent implements OnInit {
  @Input() cubeSize: 'SM' | 'MD' | 'LG' = 'MD';
  @Input() description: string = '';

  backgroundColors = {
    light: 0xffffff,
    dark: 0x4a5261,
  };

  cubeEdgeLength: number = 7;
  canvasEdgeLength: number;
  cameraProximity: number;

  private readonly destroy$ = new Subject();

  // Three.js vars
  mesh: THREE.Mesh;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  sizes: {
    width: number;
    height: number;
  };

  constructor(private darkModeService: DarkModeService) {
    darkModeService
      .getBehaviorSubject()
      .pipe(takeUntil(this.destroy$), skip(1))
      .subscribe((darkMode) => {
        // TODO fix that the loop function isnt triggered several times. (cube rotates faster each time)
        this.startTheCube();
      });

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

    // Create THREE.js objects and assign them to the class vars
    // Scene
    this.scene = new THREE.Scene();

    // Cube
    //   Geometry
    const geometry = new THREE.BoxGeometry(
      this.cubeEdgeLength,
      this.cubeEdgeLength,
      this.cubeEdgeLength
    );

    //   Material
    const textureLoader = new THREE.TextureLoader();
    const catTexture = textureLoader.load('assets/pictures/cube/cat.jpg');
    const catPicMaterial = new THREE.MeshBasicMaterial({ map: catTexture });
    const personTexture = textureLoader.load('assets/pictures/cube/person.jpg');
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
    this.mesh = new THREE.Mesh(geometry, materials);
    this.mesh.rotation.x = Math.PI / 4;
    this.scene.add(this.mesh);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Parameters: color, intensity
    this.scene.add(ambientLight);
    this.scene.add(ambientLight);

    // Sizes
    this.sizes = {
      width: this.canvasEdgeLength,
      height: this.canvasEdgeLength,
    };

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      this.cameraProximity,
      // The following is width / height, but as it is a square, the edge length is the same
      this.sizes.width / this.sizes.height
    );
    this.camera.position.z = 17;
    this.scene.add(this.camera);

    // Resizing the canvas on window resize
    window.addEventListener('resize', () => {
      this.camera.aspect = this.sizes.width / this.sizes.height;
      this.camera.updateProjectionMatrix();
      //renderer.setSize(this.sizes.width, this.sizes.height);
    });
  }

  startTheCube(): void {
    // Renderer
    const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(this.sizes.width, this.sizes.height);
    renderer.setPixelRatio(2);
    renderer.setClearColor(
      this.darkModeService.getBehaviorSubject().getValue()
        ? this.backgroundColors.dark
        : this.backgroundColors.light
    );
    renderer.render(this.scene, this.camera);

    // Controls
    const controls = new OrbitControls(this.camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Loop
    const loop = () => {
      controls.update();
      renderer.render(this.scene, this.camera);
      window.requestAnimationFrame(loop);
    };
    loop();
    this.letTheCubeAppearDynamically();
  }

  letTheCubeAppearDynamically(): void {
    // Timeline
    const timeline = gsap.timeline({ defaults: { duration: 3 } });
    timeline.fromTo(
      this.mesh.scale,
      { z: 0, x: 0, y: 0 },
      { z: 1, x: 1, y: 1 }
    );
    timeline.fromTo('.title', { opacity: 0 }, { opacity: 1 });
  }

  ngOnInit(): void {
    this.startTheCube();
  }

  ngOnDestroy(): void {
    this.destroy$.next(1);
    this.destroy$.complete();
  }
}
