import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionComponent } from './attention.component';

describe('AttentionComponent', () => {
  let component: AttentionComponent;
  let fixture: ComponentFixture<AttentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttentionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
