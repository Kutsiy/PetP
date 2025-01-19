import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.scss',
    standalone: false
})
export class SideMenuComponent implements OnInit, OnDestroy {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  private breakpointSubscription!: Subscription;
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.Breakpoint();
  }

  ngOnDestroy(): void {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }

  Breakpoint() {
    this.breakpointSubscription = this.breakpointObserver
      .observe(`(max-width: 1200px)`)
      .subscribe((result) => {
        setTimeout(() => {
          this.isSmallScreen = result.matches;
          if (this.isSmallScreen) {
            this.notify.emit('Horizontally');
            this.selected = 'Horizontally';
          } else {
            this.notify.emit('Vertically');
            this.selected = 'Vertically';
          }
        });
      });
  }

  notifyParent(message: string) {
    this.notify.emit(message);
  }

  categories = [
    { value: 'About me', viewValue: 'About me' },
    { value: 'News about programming', viewValue: 'News about programming' },
  ];

  filterDisplay = [
    { value: 'Vertically', viewValue: 'Vertically' },
    { value: 'Horizontally', viewValue: 'Horizontally' },
  ];
  selected: string = this.filterDisplay[0].value;
  onSelectionChange(event: any): void {
    this.notifyParent(this.selected);
  }
}
