import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import * as THREE from 'three';

@Component({
    selector: 'app-bulb',
    templateUrl: './bulb.component.html',
    styleUrl: './bulb.component.scss',
    standalone: false
})
export class BulbComponent implements OnInit, OnDestroy {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private box!: THREE.Mesh;
  private animationFrameId!: number;
  private clock!: THREE.Clock;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = this.document.getElementById(
        'canvas-box'
      ) as HTMLCanvasElement;
      if (!canvas) {
        return;
      }

      const canvasSizes = {
        width: 300,
        height: 300,
      };

      this.scene = new THREE.Scene();
      const color = new THREE.Color('rgba(56, 18, 109, 1)');
      const material = new THREE.MeshToonMaterial({
        color: color,
      });

      const ambientLight = new THREE.AmbientLight(0xffffff, 2);
      this.scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 29);
      pointLight.position.y = 6;
      const pointLight1 = new THREE.PointLight(0xffffff, 6);
      pointLight1.position.z = 6;
      this.scene.add(pointLight, pointLight1);

      this.box = new THREE.Mesh(new THREE.BoxGeometry(5.5, 5.5, 5.5), material);
      this.scene.add(this.box);

      this.camera = new THREE.PerspectiveCamera(
        75,
        canvasSizes.width / canvasSizes.height,
        0.001,
        1000
      );
      this.camera.position.z = 10;
      this.scene.add(this.camera);

      this.renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
      });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setSize(canvasSizes.width, canvasSizes.height);

      window.addEventListener('resize', this.onResize.bind(this, canvasSizes));

      this.clock = new THREE.Clock();
      this.animateGeometry();
    }
  }

  private onResize(canvasSizes: { width: number; height: number }): void {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = canvasSizes.width / canvasSizes.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(canvasSizes.width, canvasSizes.height);
    this.renderer.render(this.scene, this.camera);
  }

  private animateGeometry(): void {
    this.animationFrameId = window.requestAnimationFrame(() =>
      this.animateGeometry()
    );
    const elapsedTime = this.clock.getElapsedTime();

    this.box.rotation.x = elapsedTime;
    this.box.rotation.y = elapsedTime;
    this.box.rotation.z = elapsedTime;

    this.renderer.render(this.scene, this.camera);
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.animationFrameId);

      this.renderer.dispose();
      this.scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      const canvas = this.renderer.domElement;
      if (canvas.parentElement) {
        canvas.parentElement.removeChild(canvas);
      }
    }
  }
}
