import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticationwrapper',
  templateUrl: './authenticationwrapper.component.html',
  styleUrl: './authenticationwrapper.component.scss',
})
export class AuthenticationwrapperComponent implements OnInit {
  element: HTMLDivElement | null = null;
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.element = this.elementRef.nativeElement.querySelector(
      '.auth__box'
    ) as HTMLDivElement;
  }

  activate() {
    if (this.element) this.element.classList.toggle('active');
  }
}
