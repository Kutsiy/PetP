import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleswrapperComponent } from './articleswrapper.component';

describe('ArticleswrapperComponent', () => {
  let component: ArticleswrapperComponent;
  let fixture: ComponentFixture<ArticleswrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleswrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleswrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
