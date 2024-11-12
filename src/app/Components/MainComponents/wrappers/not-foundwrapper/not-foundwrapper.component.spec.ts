import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundwrapperComponent } from './not-foundwrapper.component';

describe('NotFoundwrapperComponent', () => {
  let component: NotFoundwrapperComponent;
  let fixture: ComponentFixture<NotFoundwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundwrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
