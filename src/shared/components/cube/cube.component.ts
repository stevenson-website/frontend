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

  darkMode$: BehaviorSubject<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.getBehaviorSubject();

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

    const penguinBackTexture = textureLoader.load(
      'assets/pictures/cube/penguin_back.jpg'
    );
    const penguinBackMaterial = new THREE.MeshBasicMaterial({
      map: penguinBackTexture,
    });
    const penguinFrontTexture = textureLoader.load(
      'assets/pictures/cube/penguin_front.jpg'
    );
    const penguinFrontMaterial = new THREE.MeshBasicMaterial({
      map: penguinFrontTexture,
    });
    const penguinRightTexture = textureLoader.load(
      'assets/pictures/cube/penguin_right.jpg'
    );
    const penguinRightMaterial = new THREE.MeshBasicMaterial({
      map: penguinRightTexture,
    });
    const penguinLeftTexture = textureLoader.load(
      'assets/pictures/cube/penguin_left.jpg'
    );
    const penguinLeftMaterial = new THREE.MeshBasicMaterial({
      map: penguinLeftTexture,
    });
    const penguinTopTexture = textureLoader.load(
      'assets/pictures/cube/penguin_top.jpg'
    );
    const penguinTopMaterial = new THREE.MeshBasicMaterial({
      map: penguinTopTexture,
    });
    const penguinBottomTexture = textureLoader.load(
      'assets/pictures/cube/penguin_bottom.jpg'
    );
    const penguinBottomMaterial = new THREE.MeshBasicMaterial({
      map: penguinBottomTexture,
    });

    const materials = [
      penguinRightMaterial, // Right side
      penguinLeftMaterial, // Left side
      penguinTopMaterial, // Top side
      penguinBottomMaterial, // Bottom side
      penguinFrontMaterial, // Front side
      penguinBackMaterial, // Back side
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
    const timeline = gsap.timeline({ defaults: { duration: 2 } });
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
