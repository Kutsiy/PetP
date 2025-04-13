import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-short-post',
  standalone: false,

  templateUrl: './short-post.component.html',
  styleUrl: './short-post.component.scss',
})
export class ShortPostUiComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();
  @Input() id: any;
  @Input() data: any;
  img: any;

  handleClick() {
    this.clicked.emit(this.id);
  }

  ngOnInit(): void {
    this.img = `http://localhost:3000${this.data.imageUrl}`;
  }
}
