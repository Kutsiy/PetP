import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrl: './bulb.component.scss',
})
export class BulbComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = this.document.getElementById('canvas-box');
      if (!canvas) {
        return;
      }

      const canvasSizes = {
        width: 300,
        height: 300,
      };

      const scene = new THREE.Scene();

      const color = new THREE.Color('rgba(56, 18, 109, 1)');

      const material = new THREE.MeshToonMaterial({
        color: color,
      });

      const ambientLight = new THREE.AmbientLight(0xffffff, 2);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 29);
      pointLight.position.y = 6;
      const pointLight1 = new THREE.PointLight(0xffffff, 6);
      pointLight1.position.z = 6;
      scene.add(pointLight, pointLight1);

      const box = new THREE.Mesh(
        new THREE.BoxGeometry(5.5, 5.5, 5.5),
        material
      );

      scene.add(box);

      const camera = new THREE.PerspectiveCamera(
        75,
        canvasSizes.width / canvasSizes.height,
        0.001,
        1000
      );
      camera.position.z = 10;
      scene.add(camera);

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
      });
      renderer.setClearColor(0x000000, 0);

      renderer.setSize(canvasSizes.width, canvasSizes.height);

      window.addEventListener('resize', () => {
        camera.aspect = canvasSizes.width / canvasSizes.height;
        camera.updateProjectionMatrix();

        renderer.setSize(canvasSizes.width, canvasSizes.height);
        renderer.render(scene, camera);
      });

      const clock = new THREE.Clock();

      const animateGeometry = () => {
        const elapsedTime = clock.getElapsedTime();

        box.rotation.x = elapsedTime;
        box.rotation.y = elapsedTime;
        box.rotation.z = elapsedTime;

        renderer.render(scene, camera);

        window.requestAnimationFrame(animateGeometry);
      };

      animateGeometry();
    }
  }
}
