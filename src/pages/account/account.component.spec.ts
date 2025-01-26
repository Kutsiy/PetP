import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountwrapperComponent } from './account.component';

describe('AccountwrapperComponent', () => {
  let component: AccountwrapperComponent;
  let fixture: ComponentFixture<AccountwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountwrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
