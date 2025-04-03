import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularArticlesComponent } from './popular-articles.component';

describe('PopularArticlesComponent', () => {
  let component: PopularArticlesComponent;
  let fixture: ComponentFixture<PopularArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
