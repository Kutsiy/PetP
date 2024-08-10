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

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 2);
      pointLight.position.x = 0;
      pointLight.position.y = 5;
      pointLight.position.z = 0;
      scene.add(pointLight);

      const box = new THREE.Mesh(
        new THREE.BoxGeometry(5.5, 5.5, 5.5),
        material
      );

      // const torus = new THREE.Mesh(
      //   new THREE.TorusGeometry(15, 3.5, 16, 100),
      //   material
      // );

      scene.add(box);

      const camera = new THREE.PerspectiveCamera(
        75,
        canvasSizes.width / canvasSizes.height,
        0.001,
        1000
      );
      camera.position.z = 10;
      scene.add(camera);

      // Создаем рендер с параметром alpha: true
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true, // Включаем прозрачность
      });

      // Устанавливаем прозрачный цвет фона
      renderer.setClearColor(0x000000, 0); // Альфа-канал установлен в 0 для полной прозрачности

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

        // torus.rotation.x = -elapsedTime;
        // torus.rotation.y = -elapsedTime;
        // torus.rotation.z = -elapsedTime;

        // Рендерим сцену
        renderer.render(scene, camera);

        // Запускаем анимацию снова на следующем кадре
        window.requestAnimationFrame(animateGeometry);
      };

      animateGeometry();
    }
  }
}
